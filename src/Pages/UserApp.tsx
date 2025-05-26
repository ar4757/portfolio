import '../index.scss'
import NavBar from '../Components/NavBar.tsx'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

function UserApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
    <NavBar/>
    <br />
    <div className="center">
      <Outlet/>
    </div>
    <br />
    <footer>
      <a className="text--small" href="/privacy">Privacy Policy</a>
      <p className="text--small">This site uses affiliate links and earns a commission from certain links. This does not affect your purchases or the price you may pay.</p>
      <p className="text--small">As an Amazon Associate we earn from qualifying purchases.</p>
    </footer>
    </>
  )
}

export default UserApp
