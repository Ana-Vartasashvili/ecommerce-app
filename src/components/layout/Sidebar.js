import classes from './Sidebar.module.css'
import { useDispatch } from 'react-redux'
import { menubarActions } from '../../store/menubar-slice'
import CloseIcon from '../icons/CloseIcon'

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
