import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import ThemeProvider from "./store/ChangeTheme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
