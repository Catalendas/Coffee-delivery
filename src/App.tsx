import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CartContextProvider } from "./Context/CartContext"
import { Router } from "./router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter> 
        <CartContextProvider>
          <Router/>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
