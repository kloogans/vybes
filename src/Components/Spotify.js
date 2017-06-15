import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchArtist } from '../Actions/searchArtist'
import { selectArtist } from '../Actions/selectArtist'

class Spotify extends Component {
  handleSelect (artist) {
    this.props.selectArtist(artist)
    this.refs.query.value = ''
  }

  _submit = (e) => {
    e.preventDefault()
  }

  render () {
    if (this.props.built) {
      return <div className='logo-container'>
        <div className='circles'>
          <div className='logo'>
            <div className='logo-loader' />
          </div>
        </div>
      </div>
    } else if (this.props.fetchState || this.props.results.length === 0) {
      return (
        <div className='container'>
          <form autoComplete='off' className='spotify-form'>
            <label htmlFor='artistSearch'>
              <span className='hidden'>
              Search for an artist you like.
            </span>
            </label>
            <input id='artistSearch'
              className='spotify-form__artist-input'
              type='text'
              ref='query'
              placeholder='Artist search'
              title='Search for an artist'
              onChange={() => this.props.searchArtist(this.refs.query.value)}
              tabIndex='1' />
          </form>
        </div>
      )
    } else {
      return (
        <div className='container'>
          <form className='spotify-form'>
            <label htmlFor='artistSearch'>
              <span className='hidden'>
              Search for an artist you like.
            </span>
            </label>
            <input id='artistSearch'
              className='spotify-form__artist-input'
              tabIndex='1'
              type='text'
              ref='query'
              placeholder='Artist search'
              onChange={() => this.props.searchArtist(this.refs.query.value)}
            />
          </form>
          <div className='live-results'>
            <h2 className='live-results__small-heading'>Suggestions</h2>
            <ul>
              {this.props.results.map((artist) =>
                <li className='live-results__results-tag' key={artist.id}
                  onClick={() => this.handleSelect(artist)}>
                  {artist.name}
                </li>
              )}
            </ul>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.search.results,
    fetchState: state.search.fetching,
    built: state.playlist.built
  }
}

// Pass action to component's props
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchArtist: searchArtist,
    selectArtist: selectArtist
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Spotify)
