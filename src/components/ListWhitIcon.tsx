import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  text: string
}

export const ListWhitIcon = ({text}: Props) => {
  return (
    <div className="actividad">
      <FontAwesomeIcon icon={faCode} className='icon-list' />
      <span style={{marginLeft: 10}}>{text}</span>
    </div>
  )
}
