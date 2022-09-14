import classes from './Cart.module.css'
import Overlay from '../../UI/Overlay'
import CloseIcon from '../icons/CloseIcon'
import CartItem from './CartItem'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const Cart = () => {
  const dispatch = useDispatch()
  const cartCloseHandler = () => {
    dispatch(cartActions.toggle())
  }

  return (
    <>
      <div className={classes.cart}>
        <div className={classes.headerContainer}>
          <div className={classes.text}>
            <p className={classes.title}>Your Order</p>
            <p className={classes.amount}>(7) items</p>
            <p className={classes.price}>$260.99</p>
          </div>

          <div className={classes.icon} onClick={cartCloseHandler}>
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
