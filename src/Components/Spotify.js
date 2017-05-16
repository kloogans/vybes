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
      return (<span />)
    } else if (this.props.fetchState || this.props.results.length === 0) {
      return (
        <div className='container'>
          <form className='spotify-form'>
            <input className='artist-input' type='text' ref='query' placeholder='Artist search'
              onChange={() => this.props.searchArtist(this.refs.query.value)} />
          </form>
        </div>
      )
    } else {
      return (
        <div className='container'>
          <form className='spotify-form'>
            <input className='artist-input' type='text' ref='query' placeholder='Artist search'
              onChange={() => this.props.searchArtist(this.refs.query.value)} />
          </form>
          <div className='live-results'>
            <h2 className='small-heading title'>Suggestions</h2>
            <ul>
              {this.props.results.map((artist) =>
                <li className='results-tag' key={artist.id} onClick={() => this.handleSelect(artist)}>{artist.name}</li>
              )}
            </ul>
          </div>
        </div>
      )
    }
  }
}

// Container functionality.
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

// Export this file as a container, aka smart component.
export default connect(mapStateToProps, matchDispatchToProps)(Spotify)
