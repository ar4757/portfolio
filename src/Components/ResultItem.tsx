import '../index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PortfolioItem } from '../Types/PortfolioItem'

function LinkToDetails(props: any) {
  let gameData = props.item as PortfolioItem;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link className="link-item" role="button" to={gameData.link_url} onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <div className="result-item">
        <div className="img--rounded">
          <img className={isHovered ? "img img--bigger" : "img"} referrerPolicy="no-referrer" src={gameData.image_url} />
        </div>
        <div className="header">
          <p className={isHovered ? "name name--hover" : "name"}>{gameData.name}</p>
        </div>
        <div className="header">
          <p>{gameData.description}</p>
        </div>
        <div className="header">
          {gameData.repo_url ? <div><br/><span>{gameData.repo_url}</span></div> : <></>}
        </div>
      </div>
    </Link>
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
