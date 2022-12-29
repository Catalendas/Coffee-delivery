import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QunatityInputContainer } from "./styled";

interface QuantityInputProps {
    onIncrease: () => void,
    onDecrease: () => void,
    quantity: number
}

export function QuantityInput({ onIncrease, onDecrease, quantity}: QuantityInputProps) {
    return(
        <QunatityInputContainer>
            <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
                <Minus size={14} weight="fill"/>
            </IconWrapper>

            <input type="text" readOnly value={quantity}/>
            
            <IconWrapper onClick={onIncrease}>
                <Plus size={14} weight="fill"/>
            </IconWrapper>
        </QunatityInputContainer>
    )
}