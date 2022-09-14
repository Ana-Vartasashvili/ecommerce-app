import classes from './ShopItem.module.css'

const ShopItem = (props) => {
  return (
    <div>
      <div className={classes.productItem}>
        <img src={props.image} alt="corn snack with chilli flavour" />
        <h2>{props.title}</h2>
        <p>{`$${props.price.toFixed(2)}`}</p>
        <button className={classes.btn}>Add to cart</button>
      </div>
    </div>
  )
}

export default ShopItem
