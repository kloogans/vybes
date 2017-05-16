import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Logo extends Component {
  render () {
    return <div className='logo-container'>
      <NavLink to='/'>
        <div className='circles'>
          <div className='logo'>
            <div className='logo-dots' />
          </div>
        </div>
      </NavLink>
    </div>
  }
}

export default Logo
