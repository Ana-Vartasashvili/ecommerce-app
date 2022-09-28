import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import classes from './ItemDetails.module.css'
import { useState } from 'react'
import { ProductsActions } from '../../store/products-slice'
import { cartActions } from '../../store/cart-slice'

const ItemDetails = (props) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [itemQuantity, setItemQuantity] = useState(1)

  const items = useSelector((state) => state.products.items)

  const currentItem = items
    ? items.find((item) => item.id.toString() === id)
    : []

  const increaseQuantityHandler = () => {
    setItemQuantity((prev) => prev + 1)
  }

  const decreaseQuantityHandler = () => {
    itemQuantity > 1 && setItemQuantity((prev) => prev - 1)
  }

  const addItemToCartHandler = () => {
    dispatch(
      ProductsActions.addItemToCart({
        id: currentItem.id,
        itemQuantity: itemQuantity,
      })
    )
    dispatch(cartActions.toggle())
    setItemQuantity(1)
  }

  return (
    <>
      {currentItem && (
        <div className={classes.container}>
          <div className={classes.image}>
            <img src={currentItem.image} alt="Corn snack"></img>
          </div>

          <div className={classes.text}>
            <h2 className={classes.title}>{currentItem.title}</h2>
            <p className={classes.price}>{`$${currentItem.price.toFixed(
              2
            )}`}</p>

            <div className={classes.flex}>
              <div className={classes.quantity}>
                <button onClick={decreaseQuantityHandler}>-</button>
                <span>{itemQuantity}</span>
                <button onClick={increaseQuantityHandler}>+</button>
              </div>
              <button
                className={classes.addToCartBtn}
                onClick={addItemToCartHandler}
              >
                Add to cart
              </button>
            </div>

            <div className={classes.description}>{currentItem.description}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default ItemDetails
