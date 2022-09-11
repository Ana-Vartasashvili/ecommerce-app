import { Route, Routes, Navigate } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import Welcome from './pages/Welcome/Welcome/Welcome'
import Header from './UI/Header'

function App() {
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
