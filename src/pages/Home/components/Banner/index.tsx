import { BannerBanefits, BannerContainer, BanneroContent, BannerTitle} from "./style";
import BannerImg from "../../../../assets/coffee-delivery.svg";
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";


export function Banner() {
    const { colors } = useTheme()

    return ( 
        <BannerContainer>
            <BanneroContent className="container">
                <div>
                    <section>
                        <BannerTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </BannerTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>

                    <BannerBanefits>
                        <InfoWithIcon 
                            icon={<Package weight="fill"/>} 
                            text="Compra simples e segura" 
                            iconBg={colors["brand-yellow-dark"]}
                        />

                        <InfoWithIcon 
                            icon={<ShoppingCart weight="fill"/>} 
                            text="Embalagem mantém o café intacto" 
                            iconBg={colors["base-text"]}
                        />

                        <InfoWithIcon 
                            icon={<Timer weight="fill"/>} 
                            text="Entrega rápida e rastreada" 
                            iconBg={colors["brand-yellow"]}
                        />

                        <InfoWithIcon 
                            icon={<Coffee weight="fill"/>} 
                            text="O café chega fresquinho até você" 
                            iconBg={colors["brand-purple"]}
                        />
                    </BannerBanefits>
                </div>

                <img src={BannerImg} />
            </BanneroContent>
        </BannerContainer>
    )
}