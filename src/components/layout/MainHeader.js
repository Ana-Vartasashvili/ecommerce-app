import { menubarActions } from '../../store/menubar-slice'
import { cartActions } from '../../store/cart-slice'
import SidebarIcon from '../../icons/SidebarIcon'
import classes from './MainHeader.module.css'
import { useDispatch, useSelector } from 'react-redux'
import CartIcon from '../../icons/CartIcon'
import { Link } from 'react-router-dom'

const MainHeader = (props) => {
  const dispatch = useDispatch()
  const numCartItems = useSelector((state) => state.products.cartItems.length)

  const showSidebarHandler = () => {
    dispatch(menubarActions.toggle())
  }

  const cartShowHandler = () => {
    dispatch(cartActions.toggle())
  }

  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.SidebarIcon} onClick={showSidebarHandler}>
          <SidebarIcon />
        </div>

        <div className={classes.shopAbout}>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>

        <Link to="/welcome" className={classes.logo}>
          HOME
        </Link>

        <div className={classes.cartIcon} onClick={cartShowHandler}>
          <CartIcon />
          <div className={classes.numCartItems}>
            <span>{numCartItems}</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default MainHeader
