import { useNavigate, useLocation } from 'react-router-dom';
import { RoutesInterface } from '../Interfaces/navigateInterface';

interface Props {
  infoBtn: RoutesInterface
}

export const BtnNavigate = ({infoBtn}: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigatePage = () => {
    navigate(infoBtn.path!);
  }

  return (
    <button
      onClick={navigatePage}
      className={
        `header__pagination-button ${!pathname.search(infoBtn.path!) && 'header__pagination-button-active animate__animated animate__bounceIn'}`
      }
    >
      {infoBtn.name}
    </button>
  )
}
