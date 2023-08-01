import { Routes, Route } from 'react-router-dom'
import { navegateList } from '../data/navegateData'
import { RoutesInterface } from '../Interfaces/navigateInterface'
import { Header } from '../components/Header'

export const AppRouter = () => {

  return (
    <>
    <Header />
    <Routes>
      {
        navegateList.map(({path, element}: RoutesInterface) => <Route path={path} element={element} key={path} />)
      }
    </Routes>
    </>
  )
}
