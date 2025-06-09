import '../index.scss'
import ResultItem from '../Components/ResultItem'
import { PortfolioItem } from '../Types/PortfolioItem';

function Home() {
  const allGames: PortfolioItem[] = [
    {name: "Game Price Drops", skills: ["React", "Node.js", "HTML", "CSS", "JavaScript", "TypeScript", "PostgreSQL", "AWS"], description: "A website that scrapes the latest video game sales data and notifies users of new sales.", link_url: "https://gamepricedrops.com", image_url: "project_imgs/GamePriceDrops.webp", repo_url: null},
    {name: "Homer", skills: ["React", "Node.js", "HTML", "CSS", "JavaScript", "TypeScript", "PostgreSQL", "AWS"], description: "A website used by hundreds of homeowners and businesses to find each other.", link_url: null, image_url: "project_imgs/Homer.webp", repo_url: null},
    {name: "Persona 5 Fusion Calculator", skills: ["iOS", "Swift", "Objective C", "Xcode"], description: "An iOS app that identifies Persona fusions for the hit videogame Persona 5.", link_url: null, image_url: "https://github.com/ar4757/Fusion-Calculator/blob/master/GitHub%20Images/demo.gif?raw=true", repo_url: "https://github.com/ar4757/Fusion-Calculator"},
    {name: "Route My Run", skills: ["iOS", "Swift", "Objective C", "Xcode"], description: "An iOS app that recommends running routes, and provides GPS tracking, turn-by-turn directions, and social networking features.", link_url: null, image_url: "project_imgs/RouteMyRun.webp", repo_url: "https://github.com/ar4757/Route-My-Run"},
    {name: "Tanks", skills: ["Unity", "C#", "Game AI"], description: "A video game made in Unity that is inspired by Wii Play.", link_url: null, image_url: "project_imgs/Tanks!.webp", repo_url: "https://github.com/ar4757/Tanks"},
    {name: "Backpacking", skills: ["Unity", "C#", "Game AI"], description: "A video game made for my Graduate-level AI for Games at the University of Florida. A parody of the Role Playing Game genre that is inspired by Earthbound and the Legend of Zelda.", link_url: null, image_url: "project_imgs/Backpacking.webp", repo_url: null},
    {name: "RecipEase", skills: ["Android", "Java", "Android Studio"], description: "An Android app that recommends recipes based on what users have in their pantry!", link_url: null, image_url: "https://user-images.githubusercontent.com/26062564/37796120-dbd97cc4-2dec-11e8-9f10-fc63f87c3c77.gif", repo_url: "https://github.com/recipEase-admin/recipEase"},
  ];

  const ResultList = allGames?.map((item) => {
    //console.log(item);
    return (
      <ResultItem item={item}/>
    )
  });

  return (
    <>
      <br/>
      <div className="main-grid">
        {ResultList}
      </div>
    </>
  )
}

export default Home
