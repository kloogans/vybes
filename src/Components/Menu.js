import React, { Component } from 'react'
import enhanceWithClickOutside from 'react-click-outside'
import { Link } from 'react-router-dom'

class Menu extends Component {
  state = {
    isOpened: false
  }

  toggleMenu = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  handleClickOutside () {
    this.setState({ isOpened: false })
  }
  render () {
    return <header>
      <nav className='menu'>
        <div className='menu-wrap'>
          <input type='checkbox' href='#' className='menu-open' name='menu-open' id='menu-open' tabIndex='3' onClick={this.toggleMenu} checked={this.state.isOpened} />
          <label className='menu-open-button' htmlFor='menu-open'>
            <span className='hamburger hamburger-1' />
            <span className='hamburger hamburger-2' />
            <span className='hamburger hamburger-3' />
          </label>

          <Link to='/' className='menu-item' onClick={this.toggleMenu} title='Home' tabIndex='4'> <i className='fa fa-home' /> </Link>
          <Link to='/info' className='menu-item' onClick={this.toggleMenu}title='How to use Vybes' tabIndex='5'> <i className='fa fa-info' /> </Link>
          <Link to='/contact' className='menu-item' onClick={this.toggleMenu}title='Contact' tabIndex='6'> <i className='fa fa-envelope' /> </Link>
        </div>
      </nav>
    </header>
  }
}

export default enhanceWithClickOutside(Menu)
