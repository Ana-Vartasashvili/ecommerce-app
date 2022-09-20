import classes from './ShopItem.module.css'
import { ProductsActions } from '../../store/products-slice'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const ShopItem = (props) => {
  const dispatch = useDispatch()
  const id = props.id
  const addItemToCartHandler = () => {
    dispatch(ProductsActions.addItemToCart(id))
    dispatch(cartActions.toggle())
  }

  return (
    <div className={classes.productItem}>
      <div className={classes.itemImage}>
        <img src={props.image} alt="corn snack with chilli flavour" />
      </div>
      <h2>{props.title}</h2>
      <p>{`$${props.price.toFixed(2)}`}</p>
      <button className={classes.btn} onClick={addItemToCartHandler}>
        Add to cart
      </button>
    </div>
  )
}

export default ShopItem
