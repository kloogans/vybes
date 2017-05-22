import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { buildPlaylist } from '../Actions/buildPlaylist'

class Playlist extends Component {
  render () {
    if (this.props.inProgress) {
      return (
        <div className='container section'>
          <h2 className='small-heading centered'>
            Building...
          </h2>
        </div>
      )
    } else if (this.props.built) {
      return (
        <div className='container section'>
          <iframe
            src={`https://embed.spotify.com/?theme=black&uri=spotify:trackset:My Playlist:${this.props.tracks.join()}`}
            height='400'
            width='100%'
          />
        </div>
      )
    } else {
      return (
        <span>Loading...</span>
      )
    }
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

// Export as a smart component
export default connect(mapStateToProps, matchDispatchToProps)(Playlist)
