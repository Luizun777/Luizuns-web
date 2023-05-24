import { Experience } from "../Interfaces/languageInterface"
import { ListWhitIcon } from "./ListWhitIcon"

export const LetterExp = ({job, company, dateIn, dateOut, activities, skils}: Experience) => {

  return (
    <div className="experiencia">
      <h1 className="title-exp" style={{paddingLeft: 0}}>{job}</h1>
      <h2 className="title-exp text-secondary" style={{fontWeight: '500'}}>{company}</h2>
      <h3 className="title-exp text-secondary" style={{fontWeight: '400'}}>{dateIn} - {dateOut}</h3>
      <div className="lista-actividades">
        {
          activities.map((activitie: string) => <ListWhitIcon text={activitie} key={activitie} />)
        }
      </div>
      <div className="lista-skils">
        {
          skils.map((skil: string) => <div className="skil" key={skil}>{skil}</div>)
        }
      </div>
    </div>
  )
}
