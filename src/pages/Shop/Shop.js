import { useSelector } from 'react-redux'
import ShopList from '../../components/Shop/ShopList'
import classes from '../../pages/Shop/Shop.module.css'

const Shop = () => {
  const error = useSelector((state) => state.products.error)

  if (error) {
    return <p className={classes.error}>Couldn't load shop items.</p>
  }

  return <ShopList />
}

export default Shop
