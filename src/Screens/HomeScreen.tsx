import { useContext } from "react"
import { ThemeContext } from "../context/themeContext/themeContext"

export const HomeScreen = () => {

  const { theme,setDarkTheme,setLigthTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.colors.background }}>
      <h1>Home Screen</h1>
      <button onClick={setLigthTheme}>Claro</button>
      <button onClick={setDarkTheme}>Dark</button>
    </div>
  )
}
