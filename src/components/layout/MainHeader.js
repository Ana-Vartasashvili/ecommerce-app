import CartIcon from '../icons/CartIcon'
import SidebarIcon from '../icons/SidebarIcon'
import classes from './MainHeader.module.css'
import { menubarActions } from '../../store/menubar-slice'
import { useDispatch } from 'react-redux'

const MainHeader = (props) => {
  const dispatch = useDispatch()
  const showSidebarHandler = () => {
    dispatch(menubarActions.toggle())
  }

  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.SidebarIcon} onClick={showSidebarHandler}>
          <SidebarIcon />
        </div>
        <div className={classes.shopAbout}>
          <p>Shop</p>
          <p>About</p>
        </div>
        <p className={classes.logo}>LOGO</p>
        <div>
          <CartIcon />
        </div>
      </nav>
    </header>
  )
}

export default MainHeader
