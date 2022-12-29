import styled from "styled-components";

export const ChackoutOrderContainer = styled.form`
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    margin-bottom: 5rem;
    
    @media(max-width: 520px) {
        width: 360px;
        flex-direction: column;
        align-items: center;
    }
`

export const SectionBaseStyle = styled.div `
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border: 6px;
    padding: 2.5rem;
`