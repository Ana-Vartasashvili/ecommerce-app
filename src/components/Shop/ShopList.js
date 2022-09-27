import classes from './ShopList.module.css'
import { useSelector } from 'react-redux'
import ShopItem from './ShopItem'

const ShopList = () => {
  const productsList = useSelector((state) => state.products.items)

  return (
    <div className={classes.shopList}>
      {productsList.map((item) => (
        <ShopItem
          key={item.id}
          id={item.id}
          image={item.image}
          price={item.price}
          title={item.title}
        />
      ))}
    </div>
  )
}

export default ShopList
