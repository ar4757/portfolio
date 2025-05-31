import '../index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PortfolioItem } from '../Types/PortfolioItem'

function LinkToDetails(props: any) {
  let gameData = props.item as PortfolioItem;
  const [isMainHovered, setIsMainHovered] = useState(false);
  const [isRepoHovered, setIsRepoHovered] = useState(false);

  const skills = gameData.skills.map((skill) => {
    //console.log(item);
    return (
      <span className="skill" key={skill}>
        {skill}
      </span>
    )
  });

  return (
    <div>
      <Link className="link-item" role="button" to={gameData.link_url ? gameData.link_url : ""} onMouseEnter={() => setIsMainHovered(true)}
      onMouseLeave={() => setIsMainHovered(false)}>
        <div className="result-item">
          <div>
            <img className={isMainHovered ? "img img--bigger" : "img"} referrerPolicy="no-referrer" src={gameData.image_url} />
          </div>
          <div className="header">
            <p className={isMainHovered ? "name name--hover" : "name"}>{gameData.name}</p>
          </div>
          <div className="header skills-flexbox">
            {skills}
          </div>
          <div className="header">
            <p>{gameData.description}</p>
          </div>
        </div>
      </Link>
      <div className="result-item">
        <div className="header">
          {gameData.repo_url ?
            <div>
              <br/>
              <Link className="link-item" role="button" to={gameData.repo_url} onMouseEnter={() => setIsRepoHovered(true)} onMouseLeave={() => setIsRepoHovered(false)}>
                <span className={isRepoHovered ? "repo-name repo-name--hover" : "repo-name"}>{gameData.repo_url}</span>
              </Link>
            </div>
            :
            <></>
          }
        </div>
      </div>
    </div>
  )
}

function ResultItem(props: any) {
  return (
    <>
    <LinkToDetails item={props.item}/>
    </>
  )
}

export default ResultItem
