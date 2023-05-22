import { useContext } from "react"
import { ThemeContext } from "../context/themeContext/themeContext"
import { Header } from "../components/Header";

export const HomeScreen = () => {

  const { setDarkTheme, setLigthTheme } = useContext(ThemeContext);

  return (
    <>
    <h1>Home Screen</h1>
    <button onClick={setLigthTheme}>Claro</button>
    <button onClick={setDarkTheme}>Dark</button>
    </>
  )
}
