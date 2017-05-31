import React, { Component } from 'react'

const CLIENT_ID = '56808ce6b80f4c19af5b3bc611e7a9cb'

class Login extends Component {
  _click = (event) => {
    const url = 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
      '&redirect_uri=' + encodeURIComponent(window.location.href) + '&response_type=token'
    window.location = url
  }

  componentDidMount () {
    if (window.location.hash.length > 1) {
      const query = parseQueryString(window.location.hash.substring(1))
      window.localStorage.setItem('spotify:token', query.access_token)
      this.props.history.push('/')
    }
  }

  render () {
    return <div className='Login'>
      <button onClick={this._click}>LOGIN</button>
    </div>
  }
}

const parseQueryString = (queryString) => {
  let params = {}
    // Split into key/value pairs
  const queries = queryString.split('&')
    // Convert the array of strings into an object
  for (let i = 0; i < queries.length; i++) {
    let temp = queries[i].split('=')
    params[temp[0]] = temp[1]
  }
  return params
}

export default Login
