import React, { Component } from 'react'
import Spotify from './Spotify'
import SelectedArtists from './SelectedArtists'
import BuildButton from './BuildButton'
import { connect } from 'react-redux'
// import Playlist from './Playlist'

class Home extends Component {
  render () {
    if (this.props.artists.length !== 0) {
      return <div className='Home'>
        <Spotify />
        <SelectedArtists />
        <BuildButton />
      </div>
    } else {
      return <div className='Home'>
        <Spotify />
        <SelectedArtists />
      </div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    artists: state.selected.artists,
    inProgress: state.playlist.inProgress,
    built: state.playlist.built,
    tracks: state.playlist.tracks
  }
}

export default connect(mapStateToProps)(Home)
