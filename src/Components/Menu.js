import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
  render () {
    return <header>
      <nav className='menu'>
        <div className='menu-wrap'>
          <input type='checkbox' href='#' className='menu-open' name='menu-open' id='menu-open' />
          <label className='menu-open-button' htmlFor='menu-open'>
            <span className='hamburger hamburger-1' />
            <span className='hamburger hamburger-2' />
            <span className='hamburger hamburger-3' />
          </label>

          <Link to='/' className='menu-item'> <i className='fa fa-home' /> </Link>
          <a href='#' className='menu-item'> <i className='fa fa-user' /> </a>
          <a href='#' className='menu-item'> <i className='fa fa-heart' /> </a>
          <Link to='/contact' className='menu-item'> <i className='fa fa-envelope' /> </Link>
        </div>
      </nav>
    </header>
  }
}

export default Menu
