import classes from './Sidebar.module.css'
import sidebarIllustration from '../../images/Chubbs_11-DrawKit_Vector_Illustrations_.png'
import CloseIcon from '../icons/CloseIcon'

const SideBar = (props) => {
  const closeSidebarHandler = () => {
    props.setShowSidebar(false)
  }

  return (
    <>
      <div className={classes.sidebar}>
        <div className={classes.closeIcon} onClick={closeSidebarHandler}>
          <CloseIcon />
        </div>
        <ul>
          <li>HOME</li>
          <li>SHOP</li>
          <li>ABOUT</li>
          <img
            src={sidebarIllustration}
            alt="cute illustration of a character drinking"
          />
        </ul>
        {/* <div className={classes.overlayBlur}></div> */}
      </div>
    </>
  )
}

export default SideBar
