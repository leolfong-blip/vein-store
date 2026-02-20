'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { ShopifyCart, createCart, addToCart, updateCartLine, removeFromCart, getCart } from './shopify'

interface CartContextType {
  cart: ShopifyCart | null
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
  addItem: (merchandiseId: string, quantity?: number) => Promise<void>
  updateItem: (lineId: string, quantity: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
  itemCount: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null)
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    const cartId = localStorage.getItem('cartId')
    if (cartId) {
      getCart(cartId).then((c) => {
        if (c) setCart(c)
        else localStorage.removeItem('cartId')
      })
    }
  }, [])

  async function ensureCart(): Promise<string> {
    if (cart) return cart.id
    const newCart = await createCart()
    setCart(newCart)
    localStorage.setItem('cartId', newCart.id)
    return newCart.id
  }

  async function addItem(merchandiseId: string, quantity = 1) {
    const cartId = await ensureCart()
    const updated = await addToCart(cartId, merchandiseId, quantity)
    setCart(updated)
    setCartOpen(true)
  }

  async function updateItem(lineId: string, quantity: number) {
    if (!cart) return
    const updated = await updateCartLine(cart.id, lineId, quantity)
    setCart(updated)
  }

  async function removeItem(lineId: string) {
    if (!cart) return
    const updated = await removeFromCart(cart.id, [lineId])
    setCart(updated)
  }

  const itemCount = cart?.lines.edges.reduce((sum, e) => sum + e.node.quantity, 0) ?? 0

  return (
    <CartContext.Provider value={{ cart, cartOpen, setCartOpen, addItem, updateItem, removeItem, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
