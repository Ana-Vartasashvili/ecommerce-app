import { Route, Switch } from 'react-router-dom'
import Header from './UI/Header'
import Welcome from './pages/Welcome/Welcome'

function App() {
  return (
    <Header>
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/shop"></Route>
        <Route path="/shop/:itemDetail"></Route>
        <Route path="/shop/cart"></Route>
        <Route path="/about"></Route>
      </Switch>
    </Header>
  )
}

export default App
