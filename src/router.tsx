import { Route, Routes } from "react-router-dom";
import { DefautlLayout } from "./layout/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { OrderCompleted } from "./pages/OrderCompleted";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefautlLayout/>}>
                <Route path="/" element={<Home />}/>
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/orderConfirmed" element={<OrderCompleted />}/>
            </Route>
        </Routes>
    )
}