import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import classes from './ItemDetails.module.css'

const ItemDetails = (props) => {
  const { id } = useParams()

  const items = useSelector((state) => state.products.items)

  const currentItem = items
    ? items.find((item) => item.id.toString() === id)
    : []

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
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className={classes.addToCartBtn}>Add to cart</button>
            </div>

            <div className={classes.description}>{currentItem.description}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default ItemDetails
