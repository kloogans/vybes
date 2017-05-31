import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Playlist from './Components/Playlist'
import Contact from './Components/Contact'
import Info from './Components/Info'
import Logo from './Components/Logo'
import Menu from './Components/Menu'
import Home from './Components/Home'
import Login from './Components/Login'
class App extends Component {
  render () {
    return <Router>
      <div className='app'>
        <Menu />
        <main>
          <Logo />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/contact' component={Contact} />
            <Route path='/info' component={Info} />
            <Route path='/playlist' component={Playlist} />
          </Switch>
        </main>
        <footer>
          &copy; James O'Brien 2017
        </footer>
      </div>
    </Router>
  }
}

export default App
