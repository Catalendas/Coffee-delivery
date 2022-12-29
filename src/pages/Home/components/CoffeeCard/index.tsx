import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { CoffeeCardContainer, Tags, Name, Description, CardFooter, AddCartWrapper, Descricao } from "./styled";

export interface Coffee {
    id: number,
    tags: string[],
    name: string,
    description: string,
    photo: string,
    price: number,
}

interface CoffeeCardProps {
    coffees: Coffee
}

export function CoffeeCard({ coffees }: CoffeeCardProps) {
    const [ quantity, setQuantity] = useState(1)

    function handleIncrease() {
        setQuantity((state) => state + 1)
    }

    function handleDecrease() {
        setQuantity((state) => state - 1)
    }

    const { addCoffeeToCart } = useCart()

    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffees,
            quantity,
        }

        addCoffeeToCart(coffeeToAdd)
    }

    const formattedMoney = formatMoney(coffees.price)

    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffees.photo}`}/>

            <Tags>
                {coffees.tags.map((tag) => (
                    <span key={`${coffees.id}${tag}`}>{tag}</span>
                ))}
            </Tags>

            <Name>{coffees.name}</Name>

            
           <Descricao>
                {coffees.description}
            </Descricao>  
            

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{formattedMoney}</TitleText>
                </div>
                
                <AddCartWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}