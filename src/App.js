import { ProductsActions } from '../src/store/products-slice'
import { Route, Routes, Navigate } from 'react-router-dom'
import ItemDetails from './pages/Shop/ItemDetails'
import Welcome from './pages/Welcome/Welcome'
import About from '../src/pages/about/About'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Shop from './pages/Shop/Shop'
import Header from './UI/Header'

function App() {
  const dispatch = useDispatch()

  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_BASE_URI)
        if (!response.ok) {
          throw new Error('Failed to load products.')
        }

        const data = await response.json()

        dispatch(ProductsActions.addProductData(data))
      } catch (error) {
        setErrorMessage(error.message)
      }
    }
    fetchData()
  }, [dispatch])

  return (
    <Header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ItemDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Header>
  )
}

export default App
