import './App.css'
import AppWrapper from './components/AppWrapper/AppWrapper'
import Navbar from './components/Header/Navbar'
import MainContent from './components/MainContent/MainContent'
import SidebarMenu from './components/SidebarMenu/SidebarMenu'
import { Home } from './pages'

function App() {
  return (
    <>
      {/* <Navbar/>
      <AppWrapper>
        <SidebarMenu/>
        <MainContent/>
      </AppWrapper>   */}
      <Home />
    </>
    
    
  )
}

export default App
