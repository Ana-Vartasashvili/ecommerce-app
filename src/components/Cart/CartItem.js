import { ProductsActions } from '../../store/products-slice'
import classes from './CartItem.module.css'
import CloseIcon from '../icons/CloseIcon'
import { useDispatch } from 'react-redux'

const CartItem = (props) => {
  const dispatch = useDispatch()
  const id = props.id

  const removeCartItemHandler = () => {
    dispatch(ProductsActions.removeItemFromCart(id))
  }

  const increaseQuantityHandler = () => {
    dispatch(ProductsActions.increaseQuantity(id))
  }

  const decreaseQuantityHandler = () => {
    dispatch(ProductsActions.decreaseQuantity(id))
  }

  return (
    <div className={classes.cartItem}>
      <div className={classes.item}>
        <img src={props.image} alt="corn flakes" />

        <div className={classes.text}>
          <div className={classes.titleQuantity}>
            <p className={classes.title}>{props.title}</p>
            <div className={classes.quantity}>
              <span>QTY:</span>
              <button onClick={decreaseQuantityHandler}>-</button>
              <span>{props.quantity}</span>
              <button onClick={increaseQuantityHandler}>+</button>
            </div>
          </div>

          <div className={classes.priceRemove}>
            <p>{`$${props.price.toFixed(2)}`}</p>
            <button
              className={classes.removeBtn}
              onClick={removeCartItemHandler}
            >
              <div className={classes.removeIcon}>
                <CloseIcon />
              </div>
              <span> Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
