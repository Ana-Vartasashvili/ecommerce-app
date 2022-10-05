import { ProductsActions } from '../../store/products-slice'
import { cartActions } from '../../store/cart-slice'
import classes from './ShopItem.module.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ShopItem = (props) => {
  const dispatch = useDispatch()
  const id = props.id
  const addItemToCartHandler = () => {
    dispatch(ProductsActions.addItemToCart({ id }))
    dispatch(cartActions.toggle())
  }

  return (
    <div className={classes.productItem}>
      <div className={classes.itemImage}>
        <Link to={`${id}`}>
          <img src={props.image} alt="corn snack with chilli flavour" />
        </Link>
      </div>
      <Link to={`${id}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{`$${props.price.toFixed(2)}`}</p>
      <button className={classes.btn} onClick={addItemToCartHandler}>
        Add to cart
      </button>
    </div>
  )
}

export default ShopItem
