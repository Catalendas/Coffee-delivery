import produce from "immer";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[],
    addCoffeeToCart: (coffee: CartItem) => void,
    cartQuantity: number,
    changeCartItemQunatity: (cartItemId: number, type: "increase" | "decrease") => void,
    removeCartItem: (cartItemId: number) => void,
    cartItemsTotal: number,
    cleanCart: () => void
}

export interface CardContextProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export function CartContextProvider({ children }: CardContextProviderProps) {

    const [cartItems, setCartItem] = useState<CartItem[]>(() => {

        const storedCardItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

        if(storedCardItems) {
            return JSON.parse(storedCardItems)
        }
        return[]    
    })

    const cartQuantity = cartItems.length

    const cartItemsTotal = cartItems.reduce( (total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)


    function addCoffeeToCart(coffee: CartItem) {

        const coffeeAlreadyExistsInCart = cartItems.findIndex(
            (cartItems) => cartItems.id == coffee.id
        )

        const newCart = produce( cartItems, (draft) => {

            if(coffeeAlreadyExistsInCart < 0) {
                draft.push(coffee)
            } else {
                draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
            }
        })

        return setCartItem(newCart)
    }

    function changeCartItemQunatity(cartItemId: number, type: "increase" | "decrease") {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id == cartItemId
            )

            if(coffeeExistsInCart >= 0) {
                const item = draft[coffeeExistsInCart]
                draft[coffeeExistsInCart].quantity = 
                type == 'increase' ? item.quantity + 1 : item.quantity - 1
            }
        })

        setCartItem(newCart)
    }

    function removeCartItem(cartItemId: number) {
        const newCart = produce( cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id == cartItemId
            )

            if(coffeeExistsInCart >= 0) {
                draft.splice( coffeeExistsInCart, 1)
            }
        })

        setCartItem(newCart)
    }

    function cleanCart() {
        setCartItem([])
    }

    useEffect(() => {
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider value={{cleanCart, cartItems, addCoffeeToCart, cartQuantity, changeCartItemQunatity, removeCartItem, cartItemsTotal}}>
            {children}
        </CartContext.Provider>
    )
}