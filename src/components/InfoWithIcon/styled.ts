import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

interface IconContainerProps {
    IconBg: string
}

export const IconContainer = styled.div<IconContainerProps>`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;

    background: ${({ IconBg }) => IconBg};
    color: ${({ theme }) => theme.colors["base-white"]};

    display: flex;
    justify-content: center;
    align-items: center;
`