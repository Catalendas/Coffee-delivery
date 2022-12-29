import { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer } from "./styled";

interface InfoWithIconProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
    return(
        <InfoWithIconContainer>
            <IconContainer IconBg={iconBg}>
                {icon}
            </IconContainer>
            {typeof text == 'string' ? <p>{text}</p> : text}
        </InfoWithIconContainer>
    )
}