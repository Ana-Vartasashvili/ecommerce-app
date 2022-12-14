import { ProductsActions } from '../../store/products-slice'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart-slice'
import CloseIcon from '../../icons/CloseIcon'
import classes from './Cart.module.css'
import Overlay from '../../UI/Overlay'
import CartItem from './CartItem'
import { useEffect } from 'react'
import { useState } from 'react'

const Cart = () => {
  const dispatch = useDispatch()
  const [closeCart, setCloseCart] = useState(false)

  const cartItems = useSelector((state) => state.products.cartItems)
  const cart = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(ProductsActions.getTotals())
  }, [cart, dispatch])

  const closeCartHandler = () => {
    setCloseCart(true)
    setTimeout(() => {
      dispatch(cartActions.toggle())
    }, 500)
  }

  return (
    <>
      <div className={`${classes.cart} ${closeCart && classes.closeCart}`}>
        <div className={classes.headerContainer}>
          <div className={classes.text}>
            <p className={classes.title}>Your Order</p>
            <p className={classes.amount}>({cart.totalQuantity}) items</p>
            <p className={classes.price}>{`$${cart.totalPrice.toFixed(2)}`}</p>
          </div>

          <div className={classes.icon} onClick={closeCartHandler}>
            <CloseIcon />
          </div>
        </div>

        {cartItems.length === 0 && (
          <p className={classes.placeHolder}>Your cart is empty.</p>
        )}

        <div className={classes.cartItems}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div onClick={closeCartHandler}>
        <Overlay />
      </div>
    </>
  )
}

export default Cart
