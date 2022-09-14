import { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import Welcome from './pages/Welcome/Welcome/Welcome'
import Header from './UI/Header'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsActions } from '../src/store/products-slice'
import Cart from './components/Cart/Cart'

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.products)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_BASE_URI)
        const data = await response.json()

        dispatch(ProductsActions.addProductData(data))
      } catch {}
    }
    fetchData()
  }, [dispatch])

  return (
    <Header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />

        <Route path="/welcome" element={<Welcome />} />

        <Route path="/shop" element={<Shop />}>
          <Route path="/shop/:id"></Route>
        </Route>
        <Route path="/shop/cart"></Route>
        <Route path="/about"></Route>
      </Routes>
    </Header>
  )
}

export default App
