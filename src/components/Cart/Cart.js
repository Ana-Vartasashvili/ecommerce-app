import classes from './Cart.module.css'
import Overlay from '../../UI/Overlay'
import CloseIcon from '../icons/CloseIcon'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <>
      <div className={classes.cart}>
        <div className={classes.headerContainer}>
          <div className={classes.text}>
            <p className={classes.title}>Your Order</p>
            <p className={classes.amount}>(7) items</p>
            <p className={classes.price}>$260.99</p>
          </div>

          <div className={classes.icon}>
            <CloseIcon />
          </div>
        </div>

        <CartItem />
      </div>

      <Overlay />
    </>
  )
}

export default Cart
