import React, { useReducer } from "react"
import styled from "styled-components"
import Button from "../UI/button/Button"

const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        result: state.result + Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} + ${state.input} = ${state.result + +state.input}`,
        ],
      }
    case "MINUS":
      return {
        ...state,
        result: state.result - Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} - ${state.input} = ${state.result - +state.input}`,
        ],
      }
    case "MULTIPLY":
      return {
        ...state,
        result: state.result * Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} * ${state.input} = ${state.result * +state.input}`,
        ],
      }
    case "DIVIDE":
      return {
        ...state,
        result: state.result / Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} / ${state.input} = ${state.result / +state.input}`,
        ],
      }
    case "changeInput":
      return { ...state, input: action.input }
    default:
      return state
  }
}

const initialState = {
  result: 0,
  input: "",
  history: [],
}

const MainContent = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInput = (e) => {
    dispatch({ type: "changeInput", input: e.target.value })
  }

  const plusHandler = () => {
    dispatch({ type: "PLUS" })
  }
  const minusHandler = () => {
    dispatch({ type: "MINUS" })
  }
  const multiplyHandler = () => {
    dispatch({ type: "MULTIPLY" })
  }
  const divideHandler = () => {
    dispatch({ type: "DIVIDE" })
  }

  return (
    <StyledForm>
      <input type="number" value={state.input} onChange={handleInput} />
      <ButtonsStyled>
        <Button onClick={plusHandler}>+</Button>
        <Button onClick={minusHandler}>-</Button>
        <Button onClick={multiplyHandler}>*</Button>
        <Button onClick={divideHandler}>/</Button>
      </ButtonsStyled>
      Result: {state.result}
      <ul>
        {state.history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </StyledForm>
  )
}

export default MainContent

const StyledForm = styled.div`
  margin: 50px auto;
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ButtonsStyled = styled.div`
  display: flex;
`
