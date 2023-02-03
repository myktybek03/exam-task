import React, { memo, useContext } from "react"
import { ThemeContext } from "../../store/ChangeTheme"
import Button from "../UI/button/Button"

const Header = () => {
  const themes = useContext(ThemeContext)

  return (
    <>
      <Button onClick={themes.dayTheme}>day </Button>
      <Button onClick={themes.nigthTheme}>night</Button>
    </>
  )
}

export default memo(Header)
