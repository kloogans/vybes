import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return <div className='Contact'>
      <h1> Get in touch</h1>
      <form className='contact-form'>
        <input name='name' type='text' placeholder='Name' />
        <input name='email' type='email' placeholder='Email' />
        <textarea className='contact-form-message' placeholder='Message' />
        <button className='contact-form-submit-button'>
          <i className='fa fa-envelope' />
        </button>
      </form>
    </div>
  }
}

export default Contact
