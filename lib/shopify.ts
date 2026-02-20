const domain = process.env.SHOPIFY_STORE_DOMAIN!
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!
const apiVersion = '2024-01'

const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status}`)
  }

  const json = await res.json()
  if (json.errors) {
    throw new Error(json.errors[0].message)
  }

  return json.data as T
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ShopifyImage {
  url: string
  altText: string | null
}

export interface ShopifyPriceRange {
  minVariantPrice: { amount: string; currencyCode: string }
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  priceRange: ShopifyPriceRange
  images: { edges: { node: ShopifyImage }[] }
  variants: { edges: { node: { id: string; title: string; price: { amount: string; currencyCode: string } } }[] }
}

export interface ShopifyCart {
  id: string
  checkoutUrl: string
  lines: {
    edges: {
      node: {
        id: string
        quantity: number
        merchandise: {
          id: string
          title: string
          product: { title: string; handle: string }
          price: { amount: string; currencyCode: string }
          image: ShopifyImage | null
        }
      }
    }[]
  }
  cost: {
    totalAmount: { amount: string; currencyCode: string }
  }
}

// ─── Fragments ───────────────────────────────────────────────────────────────

const PRODUCT_FRAGMENT = `
  id
  handle
  title
  description
  priceRange {
    minVariantPrice { amount currencyCode }
  }
  images(first: 3) {
    edges { node { url altText } }
  }
  variants(first: 10) {
    edges {
      node {
        id
        title
        price { amount currencyCode }
      }
    }
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export async function getAllProducts(): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(`
    query AllProducts {
      products(first: 50) {
        edges { node { ${PRODUCT_FRAGMENT} } }
      }
    }
  `)
  return data.products.edges.map((e) => e.node)
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>(`
    query ProductByHandle($handle: String!) {
      productByHandle(handle: $handle) { ${PRODUCT_FRAGMENT} }
    }
  `, { handle })
  return data.productByHandle
}

export async function getProductsByCollection(collectionHandle: string): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ collectionByHandle: { products: { edges: { node: ShopifyProduct }[] } } | null }>(`
    query CollectionProducts($handle: String!) {
      collectionByHandle(handle: $handle) {
        products(first: 30) {
          edges { node { ${PRODUCT_FRAGMENT} } }
        }
      }
    }
  `, { handle: collectionHandle })
  return data.collectionByHandle?.products.edges.map((e) => e.node) ?? []
}

// ─── Cart mutations ───────────────────────────────────────────────────────────

const CART_FRAGMENT = `
  id
  checkoutUrl
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            product { title handle }
            price { amount currencyCode }
            image { url altText }
          }
        }
      }
    }
  }
  cost {
    totalAmount { amount currencyCode }
  }
`

export async function createCart(): Promise<ShopifyCart> {
  const data = await shopifyFetch<{ cartCreate: { cart: ShopifyCart } }>(`
    mutation CartCreate {
      cartCreate { cart { ${CART_FRAGMENT} } }
    }
  `)
  return data.cartCreate.cart
}

export async function addToCart(cartId: string, merchandiseId: string, quantity: number): Promise<ShopifyCart> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: ShopifyCart } }>(`
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ${CART_FRAGMENT} }
      }
    }
  `, { cartId, lines: [{ merchandiseId, quantity }] })
  return data.cartLinesAdd.cart
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number): Promise<ShopifyCart> {
  const data = await shopifyFetch<{ cartLinesUpdate: { cart: ShopifyCart } }>(`
    mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart { ${CART_FRAGMENT} }
      }
    }
  `, { cartId, lines: [{ id: lineId, quantity }] })
  return data.cartLinesUpdate.cart
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<ShopifyCart> {
  const data = await shopifyFetch<{ cartLinesRemove: { cart: ShopifyCart } }>(`
    mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart { ${CART_FRAGMENT} }
      }
    }
  `, { cartId, lineIds })
  return data.cartLinesRemove.cart
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const data = await shopifyFetch<{ cart: ShopifyCart | null }>(`
    query GetCart($cartId: ID!) {
      cart(id: $cartId) { ${CART_FRAGMENT} }
    }
  `, { cartId })
  return data.cart
}
