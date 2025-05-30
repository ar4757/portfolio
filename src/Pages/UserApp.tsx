import '../index.scss'
import NavBar from '../Components/NavBar.tsx'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import ConstantInfo from './ConstantInfo.tsx'

function UserApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="wrapper--columns">
      <div className="left">
        <ConstantInfo/>
      </div>
      <div className="right">
        <NavBar/>
        <br />
        <div className="center">
          <Outlet/>
        </div>
        <br />
      </div>
    </div>
  )
}

export default UserApp
