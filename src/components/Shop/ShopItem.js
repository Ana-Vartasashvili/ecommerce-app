import classes from './ShopItem.module.css'
import productImg from '../../images/habanero-chilli.jpg'

const ShopItem = () => {
  return (
    <div className={classes.productItem}>
      <img src={productImg} alt="corn snack with chilli flavour" />
      <h2>Habanero Chilli</h2>
      <p>$10.00</p>
      <button>Add to cart</button>
    </div>
  )
}

export default ShopItem
