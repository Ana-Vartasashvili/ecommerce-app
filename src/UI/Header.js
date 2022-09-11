import MainHeader from '../components/layout/MainHeader'
import Sidebar from '../components/layout/Sidebar'
import { useSelector } from 'react-redux'
import './Header.module.css'

const Header = (props) => {
  const sidebarIsShown = useSelector((state) => state.menubar.isShown)

  return (
    <>
      {sidebarIsShown && <Sidebar />}
      <MainHeader />
      <main>{props.children}</main>
    </>
  )
}

export default Header
