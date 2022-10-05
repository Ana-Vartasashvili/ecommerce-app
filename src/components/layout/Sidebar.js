import { menubarActions } from '../../store/menubar-slice'
import CloseIcon from '../../icons/CloseIcon'
import classes from './Sidebar.module.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Overlay from '../../UI/Overlay'
import { useState } from 'react'

const SideBar = (props) => {
  const dispatch = useDispatch()
  const [closeSidebar, setCloseSidebar] = useState()

  const closeSidebarHandler = () => {
    setCloseSidebar(true)

    setTimeout(() => {
      dispatch(menubarActions.toggle())
    }, 500)
  }

  return (
    <>
      <div
        className={`${classes.sidebar} ${
          closeSidebar && classes.closeSidebar
        } `}
      >
        <div className={classes.sidebarContainer}>
          <div className={classes.closeIcon} onClick={closeSidebarHandler}>
            <CloseIcon />
          </div>
          <ul>
            <li>
              <Link to="/welcome" onClick={closeSidebarHandler}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={closeSidebarHandler}>
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeSidebarHandler}>
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div onClick={closeSidebarHandler}>
        <Overlay />
      </div>
    </>
  )
}

export default SideBar
