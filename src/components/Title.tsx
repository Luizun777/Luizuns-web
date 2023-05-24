import { useAnimation } from "../hooks/useAnimation";

interface Props {
  title: string
}

export const Title = ({title}: Props) => {

  const { animateFadeIn } = useAnimation();

  return (
    <h1 className={animateFadeIn(1, 'L')} style={{fontSize: '3rem'}}>{title}</h1>
  )
}
