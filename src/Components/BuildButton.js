import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
// Connect container to the passed down prop store.
import { connect } from 'react-redux'
import { buildPlaylist } from '../Actions/buildPlaylist'
import { Link } from 'react-router-dom'

class BuildButton extends Component {
  render () {
    return <div className='container section spotify-iframe'>
      <Link to='/playlist'>
        <div className='playlist-btn'
          onClick={() => this.props.buildPlaylist(this.props.artists)}>
          Create Playlist
        </div>
      </Link>
    </div>
  }
}

// Container functionality.
const mapStateToProps = (state) => {
  return {
    artists: state.selected.artists,
    inProgress: state.playlist.inProgress,
    built: state.playlist.built,
    tracks: state.playlist.tracks
  }
}

// Pass in action to component
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    buildPlaylist: buildPlaylist
  }, dispatch)
}

// Export this file as a container, aka smart component.
export default connect(mapStateToProps, matchDispatchToProps)(BuildButton)

// export default BuildButton
