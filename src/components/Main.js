import {Switch, Route} from 'react-router-dom'
import Search from '../Pages/Search'
import About from '../Pages/About'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </main>
  )
}

export default Main
