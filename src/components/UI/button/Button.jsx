import React from "react"
import styled from "styled-components"

const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

export default Button

const ButtonStyled = styled.button`
  margin: 2px;
  min-width: 2rem;
  padding: 0.3rem;
  cursor: pointer;
`
