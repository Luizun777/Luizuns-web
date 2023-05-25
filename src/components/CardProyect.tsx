import { Project } from "../Interfaces/languageInterface";
import Tooltip from "./Tooltip";

interface Props extends Project {
  tooltip: string
}

export const CardProyect = ({ image, proyectName, technology, description, url, tooltip }: Props) => {
  return (
    <Tooltip text={tooltip}>
      <a className="card" href={url} target="_blank" data-toggle="Click me">
        <div className="content">
          <div className="img">
              {/* <img src="https://unsplash.it/200/200" alt="" /> */}
              <img src={image} alt={proyectName} />
          </div>
          <div className="cardContent">
            <h3>{proyectName} <br /> <span>{technology}</span></h3>
          </div>
        </div>
        <div className="sci">
          {description}
        </div>
      </a>
    </Tooltip>
  )
}
