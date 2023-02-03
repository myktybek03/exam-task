import { useContext } from "react"
import { ThemeContext } from "./store/ChangeTheme"
import Header from "./components/header/Header"
import Calculator from "./components/calculator/Calculator"
import styled from "styled-components"
import "./App.css"

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <CalculateStyled>
      <div className={`App ${theme}`}>
        <Header />
      </div>
      <Calculator />
    </CalculateStyled>
  )
}

export default App

const CalculateStyled = styled.div`
  text-align: center;
`
