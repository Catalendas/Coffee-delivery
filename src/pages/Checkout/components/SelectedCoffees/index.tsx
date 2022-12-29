import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeCartCard } from "../CoffeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";

export function SelectedCoffees() {
    const { cartItems } = useCart()

    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>

            <DetailsContainer>
                {cartItems.map((item) => (
                    <CoffeCartCard key={item.id} coffee={item} />
                ))}

                <ConfirmationSection/>
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}