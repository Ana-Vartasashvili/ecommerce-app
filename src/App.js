import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Header from './UI/Header'

function App() {
  const sidebarIsShown = useSelector((state) => state.isShown)

  return (
    <>
      {sidebarIsShown && <Sidebar />}

      <Header>
        <Route path="/welcome"></Route>
        <Route path="/shop"></Route>
        <Route path="/shop/:itemDetail"></Route>
        <Route path="/shop/cart"></Route>
        <Route path="/about"></Route>
      </Header>
    </>
  )
}

export default App
