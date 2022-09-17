import classes from './Cart.module.css'
import Overlay from '../../UI/Overlay'
import CloseIcon from '../icons/CloseIcon'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cartItems)

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

        <div className={classes.cartItems}>
          {cartItems.map((item) => (
            <CartItem
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <Overlay />
    </>
  )
}

export default Cart
