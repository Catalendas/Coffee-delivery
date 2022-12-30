import styled from "styled-components";
import { SectionBaseStyle } from "../../style";

export const CompletOrderFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;

    @media(max-width: 520px) {
        width: 20rem;
    }
`

export const FormSectionContainer = styled( SectionBaseStyle)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const AddressFormContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;

    .cep {
        grid-column: span 3;
        max-width: 12.5rem;
    }

    .street {
        grid-column: span 3;
    }

    .complement {
        grid-column: span 2;
    }

    @media(max-width: 520px) {
        width: 320px;
        /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
        display: flex;
        flex-direction: column;

    }
`

export const PaymentMethodOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    > p {
        grid-column: span 3;
        color: ${({ theme }) => theme.colors["base-error"]};
    }

    @media(max-width: 520px) {
        grid-template-columns: repeat(1, 1fr);
        > p {
            grid-column: span 1;
        }
    }
`