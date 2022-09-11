import { useSelector } from 'react-redux'
import ShopItem from './ShopItem'
import classes from './ShopList.module.css'

const ShopList = () => {
  const productsList = useSelector((state) => state.products)

  return (
    <div className={classes.shopList}>
      {productsList.map((item) => (
        <ShopItem
          key={item.id}
          image={item.image}
          price={item.price}
          title={item.title}
        />
      ))}
    </div>
  )
}

export default ShopList
