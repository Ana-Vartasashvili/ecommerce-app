import classes from './ShopItem.module.css'
import productImg from '../../images/habanero-chilli.jpg'

const ShopItem = (props) => {
  return (
    <div className={classes.productItem}>
      <img
        src={'https://iili.io/PzG8s2.jpg'}
        alt="corn snack with chilli flavour"
      />
      <h2>{props.title}</h2>
      <p>{`$${props.price}`}</p>
      <button className={classes.btn}>Add to cart</button>
    </div>
  )
}

export default ShopItem
