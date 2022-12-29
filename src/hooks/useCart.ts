import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export function useCart() {
    const context = useContext(CartContext)
    return context
}