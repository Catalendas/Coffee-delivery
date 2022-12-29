import { OurCoffes } from "../../components/OurCoffees";
import { Banner } from "./components/Banner";
import { Container } from "./style";

export function Home() {
    return (
        <Container>
            <Banner/>
            <OurCoffes/>
        </Container>
    )
}