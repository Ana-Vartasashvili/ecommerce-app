import classes from './Sidebar.module.css'

import CloseIcon from '../icons/CloseIcon'

const SideBar = (props) => {
  const closeSidebarHandler = () => {
    props.setShowSidebar(false)
  }

  return (
    <>
      <div className={`${classes.sidebar} ${classes.slide} `}>
        <div className={classes.sidebarContainer}>
          <div className={classes.closeIcon} onClick={closeSidebarHandler}>
            <CloseIcon />
          </div>
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>ABOUT</li>
          </ul>
        </div>
      </div>
      <div className={classes.overlayBlur}></div>
    </>
  )
}

export default SideBar
