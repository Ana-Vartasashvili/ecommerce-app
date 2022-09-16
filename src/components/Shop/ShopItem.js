import classes from './ShopItem.module.css'

const ShopItem = (props) => {
  return (
    <div className={classes.productItem}>
      <div className={classes.itemImage}>
        <img src={props.image} alt="corn snack with chilli flavour" />
      </div>
      <h2>{props.title}</h2>
      <p>{`$${props.price.toFixed(2)}`}</p>
      <button className={classes.btn}>Add to cart</button>
    </div>
  )
}

export default ShopItem
