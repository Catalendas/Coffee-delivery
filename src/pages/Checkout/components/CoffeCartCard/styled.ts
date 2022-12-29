import styled from "styled-components";

export const CoffeCartCardContainer = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
    padding: 1.5rem;
    margin-bottom: 1.5rem;

    > div {

        display: flex;
        align-items: center;
        gap: 1.25rem;

        img {
            width: 4rem;
            height: 4rem;
        }
    }

    > p {
        align-self: flex-start;
        font-weight: 700;
    }

    @media(max-width: 520px) {
        gap: 1rem;

        > p {
            align-self: flex-start;
            font-weight: 700;
            font-size: .9rem;
        } 
    }
`

export const ActionsContainer = styled.div`
    margin-top: 0.5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    gap: .5rem;

    > div {
        max-width: 4.5rem;
        height: 100%;
    }
`

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    gap: .25rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: .75rem;
    height: 100%;
    border: none;
    background: ${({ theme }) => theme.colors["base-button"]};
    padding: 0 0.5rem;
    border-radius: 6px;
    transition: .4s;

    svg {
        color: ${({ theme }) => theme.colors["brand-purple"]};
    }

    &:hover {
        background: ${({ theme }) => theme.colors["base-hover"]};
    }
`