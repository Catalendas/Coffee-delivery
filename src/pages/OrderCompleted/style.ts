import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;

    h1 {
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }

    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media(max-width: 520px) {
        width: 360px;
        padding: 1rem;

        > section {
            display: flex;
            flex-direction: column;
        }

        img {
            width: 10rem;
            height: 10rem;
        }
    }
`

export const OrderDetailsContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${({ theme}) => theme.colors["base-background"]};
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: -1px;
        z-index: -1;
        border-radius: 7px 37px 7px 37px;
        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8847F8 98.76%);
    }

`