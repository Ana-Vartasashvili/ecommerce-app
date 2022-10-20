import { ProductsActions } from '../src/store/products-slice'
import { Route, Routes, Navigate } from 'react-router-dom'
import ItemDetails from './pages/Shop/ItemDetails'
import Welcome from './pages/Welcome/Welcome'
import About from '../src/pages/about/About'
import { useEffect, useState } from 'react'
import NotFound from './pages/notFound/NotFound'
import { useDispatch } from 'react-redux'
import Shop from './pages/Shop/Shop'
import Card from './UI/Card'

function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('https://products-api-one.vercel.app')
        if (!response.ok) {
          throw new Error('Failed to load products.')
        }

        const data = await response.json()

        dispatch(ProductsActions.addProductData(data))
        setIsLoading(false)
      } catch (error) {
        dispatch(ProductsActions.setError(error.message))
        setIsLoading(false)
      }
    }
    fetchData()
  }, [dispatch])

  return (
    <Card>
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/shop" element={<Shop isLoading={isLoading} />} />
        <Route path="/shop/:id" element={<ItemDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Card>
  )
}

export default App
