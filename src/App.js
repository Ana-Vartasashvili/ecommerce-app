import { Route, Routes, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome/Welcome/Welcome'
import Header from './UI/Header'

function App() {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />

        <Route path="/welcome" element={<Welcome />} />

        <Route path="/shop"></Route>
        <Route path="/shop/:itemDetail"></Route>
        <Route path="/shop/cart"></Route>
        <Route path="/about"></Route>
      </Routes>
    </Header>
  )
}

export default App
