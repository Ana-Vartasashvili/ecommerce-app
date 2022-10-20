import { useSelector } from 'react-redux'
import ShopList from '../../components/Shop/ShopList'
import classes from '../../pages/Shop/Shop.module.css'

const Shop = (props) => {
  const error = useSelector((state) => state.products.error)

  if (props.isLoading) {
    return (
      <div className={classes.container}>
        <p className={classes.text}>Loading ...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={classes.container}>
        <p className={classes.text}>Couldn't load shop items.</p>
      </div>
    )
  }

  return <ShopList />
}

export default Shop
