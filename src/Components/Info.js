import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Info extends Component {
  render () {
    return <div className='Info'>
      <div className='Info__info-container'>
        <div className='Info__welcome'>
          <h1>Vybes</h1>
          <p>Vybes makes it simple to create a playlist of the
        artists that you enjoy.</p>
          <p>Here's how it works:</p>
        </div>
        <ul className='Info__instructions'>
          <li>Search for an artist.</li>
          <li>Click the artist name to add them to your list.</li>
          <li>Repeat until you are satisfied with your artist selections.</li>
          <li>Hit the <strong>GO</strong> button at the bottom.</li>
          <li>Enjoy your custom playlist, populated by your favorite artists.</li>
        </ul>
        <div className='Info__try-it'>
          <p>Now that you're ready, let's
          <Link to='/'> give it a try</Link>.
        </p>
        </div>
      </div>
    </div>
  }
}

export default Info
