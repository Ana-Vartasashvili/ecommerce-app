import CartIcon from '../icons/CartIcon'
import SideBarIcon from '../icons/SideBarIcon'
import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.sideBarIcon}>
          <SideBarIcon />
        </div>
        <div className={classes.shopAbout}>
          <p>Shop</p>
          <p>About</p>
        </div>
        <p className={classes.logo}>LOGO</p>
        <CartIcon />
      </nav>
    </header>
  )
}

export default MainHeader
