import React, { Component } from 'react'

class Logo extends Component {
  render () {
    return <div className='logo-container'>
      <a href='/' title='Home'>
        <div className='circles'>
          <div className='logo'>
            <div className='logo-dots' />
          </div>
        </div>
      </a>
    </div>
  }
}

export default Logo
