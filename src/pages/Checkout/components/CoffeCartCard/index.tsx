import { ActionsContainer, CoffeCartCardContainer, RemoveButton } from "./styled";
import american from "/coffees/american.svg"
import { RegularText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../Context/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartProps {
    coffee: CartItem
}

export function CoffeCartCard({ coffee }: CoffeeCartProps) {
    const { changeCartItemQunatity, removeCartItem } = useCart()

    function handleIncrease() {
        changeCartItemQunatity(coffee.id, "increase")
    }

    function handleDecrease() {
        changeCartItemQunatity(coffee.id, "decrease")
    }

    function handleRemoveCartItem() {
        removeCartItem(coffee.id)
    }

    const coffeeTotal = coffee.price * coffee.quantity

    const formattedPrice = formatMoney(coffeeTotal)

    return (
        <CoffeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} />
                <div>
                    <RegularText color="subtitle">
                        {coffee.name}
                    </RegularText>
                    <ActionsContainer>
                        <QuantityInput 
                            quantity={coffee.quantity} 
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                        />
                        <RemoveButton onClick={handleRemoveCartItem}>
                            <Trash size={16}/>
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ {formattedPrice}</p>
        </CoffeCartCardContainer>
    )
}