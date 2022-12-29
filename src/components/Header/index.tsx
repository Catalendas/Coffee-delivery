import {  HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styled";
import Logo from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";

export function Header() {
    const { cartQuantity } = useCart()

    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={Logo} />
                </NavLink>

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill"/>
                        Santa barbara, SP
                    </HeaderButton>
                    <NavLink to="/Checkout">
                    <HeaderButton variant="yellow">
                        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                        <ShoppingCart size={20} weight="fill"/>
                    </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>           
        </HeaderContainer>
    )
}