import './index.scss'
import './hamburgers.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import theme from './theme.ts';
import { ThemeProvider } from '@mui/material'
import UserApp from './Pages/UserApp.tsx'
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './Pages/Home.tsx';
import Resume from './Pages/Resume.tsx';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
      <HashRouter>
      <Routes>
        <Route path="/" element={<UserApp/>}>
          <Route path="" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
      <Outlet/>
      </HashRouter>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
