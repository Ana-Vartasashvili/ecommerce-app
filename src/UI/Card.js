import MainHeader from '../components/layout/MainHeader'
import Sidebar from '../components/layout/Sidebar'
import Cart from '../components/Cart/Cart'
import { useSelector } from 'react-redux'
import './Card.module.css'
import Footer from '../components/footer/Footer'

const Header = (props) => {
  const sidebarIsShown = useSelector((state) => state.menubar.isShown)
  const cartIsShown = useSelector((state) => state.cart.isShown)
  const shopItems = useSelector((state) => state.products.items)

  return (
    <>
      {sidebarIsShown && <Sidebar />}
      {cartIsShown && <Cart />}
      <MainHeader />
      <main>{props.children}</main>
      {shopItems.length > 0 && <Footer />}
    </>
  )
}

export default Header
