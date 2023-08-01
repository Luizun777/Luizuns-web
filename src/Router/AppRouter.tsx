import { Routes, Route, useLocation } from 'react-router-dom'
import { navegateList } from '../data/navegateData'
import { RoutesInterface } from '../Interfaces/navigateInterface'
import { Header } from '../components/Header'
import { useEffect } from 'react'

export const AppRouter = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    document.title = !pathname.includes('AppVerbs') ? `💻 Luizun` : 'Verb-Quest';
  }, [location.pathname]);

  return (
    <>
    { !pathname.includes('AppVerbs') && <Header />}
    <Routes>
      {
        navegateList.map(({path, element}: RoutesInterface) => <Route path={path} element={element} key={path} />)
      }
    </Routes>
    </>
  )
}
