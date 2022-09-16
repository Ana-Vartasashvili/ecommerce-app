import classes from './CartItem.module.css'
import image from '../../images/habanero-chilli.jpg'
import CloseIcon from '../icons/CloseIcon'

const CartItem = () => {
  return (
    <div className={classes.cartItem}>
      <div className={classes.item}>
        <img src={image} alt="corn flakes" />

        <div className={classes.quantityTitle}>
          <p>Sea Salt</p>
          <div className={classes.quantity}>
            <span>QTY:</span>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <div className={classes.priceRemove}>
          <p>$12.00</p>
          <button className={classes.removeBtn}>
            <div className={classes.removeIcon}>
              <CloseIcon />
            </div>
            <span> Remove</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
