import MainHeader from '../components/layout/MainHeader'
import Sidebar from '../components/layout/Sidebar'
import Cart from '../components/Cart/Cart'
import { useSelector } from 'react-redux'
import './Card.module.css'
import Footer from '../components/footer/Footer'

const Header = (props) => {
  const sidebarIsShown = useSelector((state) => state.menubar.isShown)
  const cartIsShown = useSelector((state) => state.cart.isShown)

  return (
    <>
      {sidebarIsShown && <Sidebar />}
      {cartIsShown && <Cart />}
      <MainHeader />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Header
