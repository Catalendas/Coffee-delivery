import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { AddresForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";
import { CompletOrderFormContainer, FormSectionContainer } from "./styled";

export function CompleteOrderForm() {
    const { colors } = useTheme()

    return (
        <CompletOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>

            <FormSectionContainer>
                <SectionTitle 
                    title="Endereço de entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]}/>}
                />

                <AddresForm />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle 
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar size={22} color={colors["brand-purple-dark"]}/>}
                />

                <PaymentMethodOptions />
            </FormSectionContainer>
        </CompletOrderFormContainer>
    )
}