import styled from "styled-components";

export const OurCofeesContainer = styled.section`
    width: 100%;
    margin-top: 2rem;

    @media(max-width: 520px) {
        padding: 1rem;
    }
`

export const CoffeeList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;

    @media(max-width: 520px) {
        grid-template-columns: 1fr;
    }
 `