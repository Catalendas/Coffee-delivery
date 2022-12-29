import { CoffeeCard } from "../../pages/Home/components/CoffeeCard";
import { TitleText } from "../Typography";
import { CoffeeList, OurCofeesContainer } from "./styled";
import { coffees } from "../../Data/coffees";

export function OurCoffes() {
    return (
        <OurCofeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>

            <CoffeeList>
                {coffees.map((coffee) => (
                    <CoffeeCard coffees={coffee} key={coffee.id}/>
                ))}
            </CoffeeList>
        </OurCofeesContainer>
    )
}