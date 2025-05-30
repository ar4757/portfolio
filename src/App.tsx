import './index.scss'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import theme from './theme.ts';
import { ThemeProvider } from '@mui/material'
import UserApp from './Pages/UserApp.tsx'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './Pages/Home.tsx';
import Resume from './Pages/Resume.tsx';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<UserApp/>}>
          <Route path="" element={<Home />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
      <Outlet/>
      </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
