import { Link } from 'react-router-dom'
import FacebookIcon from '../../icons/FacebookIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.text}>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </div>

      <div className={classes.icons}>
        <div className={classes.icon}>
          <FacebookIcon />
        </div>
        <div className={classes.icon}>
          <InstagramIcon />
        </div>
      </div>
    </div>
  )
}

export default Footer
