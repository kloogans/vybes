import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Playlist from './Components/Playlist'
import Contact from './Components/Contact'
import Info from './Components/Info'
import Logo from './Components/Logo'
import Menu from './Components/Menu'
import Home from './Components/Home'

class App extends Component {
  render () {
    return <Router>
      <div className='app'>
        <Menu />
        <main>
          <Logo />
          <Switch>
            <Route exact path='/' component={Home} />
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

  // componentWillMount () {
  //   // Called the first time the component is loaded
  //   // right before the component is added to the page.
  // }
  //
  // componentDidMount () {
  //   // Called after the component has been rendered into the page.
  // }
  //
  // componentWillReceiveProps (nextProps) {
  //   // Called when the props provided to the component are changed.
  // }
  //
  // componentWillUpdate (nextProps, nextState) {
  //   // Called when the props and/or state change.
  // }
  //
  // componentWillUnmount () {
  //   // Called when the component is removed.
  // }
}

export default App
