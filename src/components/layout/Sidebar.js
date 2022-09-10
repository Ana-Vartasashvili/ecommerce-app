import classes from './Sidebar.module.css'
import { useDispatch } from 'react-redux'
import { menubarActions } from '../../store/menubar-slice'
import CloseIcon from '../icons/CloseIcon'
import { Link } from 'react-router-dom'

const SideBar = (props) => {
  const dispatch = useDispatch()
  const closeSidebarHandler = () => {
    dispatch(menubarActions.toggle())
  }

  return (
    <>
      <div className={`${classes.sidebar} ${classes.slide} `}>
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
      <div className={classes.overlayBlur}></div>
    </>
  )
}

export default SideBar
