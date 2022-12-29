import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { ChackoutOrderContainer } from "./style";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";




enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money",
}

const confirmOrderFormValidationScheme = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe a Rua"),
    number: zod.string().min(1, "Informe o Número do local"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Informe o Metodo de pagamento"}
        }
    })
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationScheme>

type ConfirmOrderData = OrderData



export function Checkout() {

    const navigate = useNavigate()
    
    const { cleanCart } = useCart()

    const confirmOrderForm = useForm<ConfirmOrderData>({
        resolver: zodResolver(confirmOrderFormValidationScheme)
    })

    const { handleSubmit } = confirmOrderForm

    function handleConfirmOrder(data: ConfirmOrderData ) {
        navigate("/orderConfirmed", {
            state: data
        })
        cleanCart()
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <ChackoutOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <CompleteOrderForm/>
                <SelectedCoffees/>
            </ChackoutOrderContainer>
        </FormProvider>
    )
}