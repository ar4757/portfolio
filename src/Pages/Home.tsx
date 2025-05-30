import { useState, useEffect } from 'react'
import '../index.scss'
import ResultItem from '../Components/ResultItem'
import { PortfolioItem } from '../Types/PortfolioItem';

function Home() {
  const allGames: PortfolioItem[] = [
    {name: "Game Price Drops", description: "A website that scrapes the latest video game sales data and notifies users of new sales.", link_url: "https://www.gamepricedrops.com", image_url: "GamePriceDrops.png", repo_url: null},
    {name: "Homer", description: "A website used by hundreds of homeowners and businesses to find each other.", link_url: null, image_url: "Homer.png", repo_url: null},
    {name: "Persona 5 Fusion Calculator", description: "An iOS app that identifies Persona fusions for the hit videogame Persona 5.", link_url: null, image_url: "https://github.com/ar4757/Fusion-Calculator/blob/master/GitHub%20Images/demo.gif?raw=true", repo_url: "https://github.com/ar4757/Fusion-Calculator"},
    {name: "Route My Run", description: "An iOS app that recommends running routes, and provides GPS tracking, turn-by-turn directions, and social networking features.", link_url: null, image_url: "RouteMyRun.png", repo_url: "https://github.com/ar4757/Route-My-Run"},
    {name: "Tanks", description: "A video game made in Unity that is inspired by Wii Play.", link_url: null, image_url: "Tanks!.png", repo_url: "https://github.com/ar4757/Tanks"},
    {name: "Backpacking", description: "A video game made for my Graduate-level AI for Games at the University of Florida. A parody of the Role Playing Game genre that is inspired by Earthbound and the Legend of Zelda.", link_url: null, image_url: "Backpacking.png", repo_url: null},
    {name: "RecipEase", description: "An Android app that recommends recipes based on what users have in their pantry!", link_url: null, image_url: "https://user-images.githubusercontent.com/26062564/37796120-dbd97cc4-2dec-11e8-9f10-fc63f87c3c77.gif", repo_url: "https://github.com/recipEase-admin/recipEase"},
  ];
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setImgsLoaded(false);
    const loadImage = (item: PortfolioItem) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = item.image_url
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => {
          resolve(item.image_url)
        }

        loadImg.onerror = err => {
          console.log(`Error loading image for: ${item.name}`);
          reject(err)
        }
      })
    }

    Promise.all(allGames.map(image => loadImage(image)))
      .then(() => setTimeout(() => {
        setImgsLoaded(true)
      }, 0))
      .catch(err => {console.log("Failed to load images", err); setImgsLoaded(true)})
  }, [])

  const ResultList = allGames?.map((item) => {
    //console.log(item);
    return (
      <ResultItem item={item}/>
    )
  });

  return (
    <>
      <br/>
      <div className="grid">
        {imgsLoaded ? ResultList : <></>}
      </div>
    </>
  )
}

export default Home
