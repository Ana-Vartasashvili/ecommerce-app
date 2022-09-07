import CartIcon from '../icons/CartIcon'
import SidebarIcon from '../icons/SidebarIcon'
import classes from './MainHeader.module.css'
import { useState } from 'react'

const MainHeader = (props) => {
  const showSidebarHandler = () => {
    props.setShowSidebar(true)
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
        <CartIcon />
      </nav>
    </header>
  )
}

export default MainHeader
