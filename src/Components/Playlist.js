import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { buildPlaylist } from '../Actions/buildPlaylist'

class Playlist extends Component {
  render () {
    const bars = [0, 1, 2, 3, 4, 5, 6, 7]
    if (this.props.inProgress) {
      return (
        <div className='sound-bars'>
          {bars.map((_, i) => {
            return <div className='bar move' key={i} />
          })}
        </div>
      )
    } else if (this.props.built) {
      if (window.screen.width > 720) {
        return (
          <div className='container section'>
            <iframe
              src={`https://embed.spotify.com/?theme=black&uri=spotify:trackset:My Playlist:${this.props.tracks.join()}`}
              height='600'
              width='600'
              frameBorder='0'
          />
          </div>
        )
      } else if (window.screen.width < 720) {
        return (
          <div className='container section'>
            <iframe
              src={`https://embed.spotify.com/?theme=black&uri=spotify:trackset:My Playlist:${this.props.tracks.join()}`}
              height='400'
              width='300'
              frameBorder='0'
          />
          </div>
        )
      }
    } else {
      return (
        <div className='sound-bars'>
          {bars.map((_, i) => {
            return <div className='bar move' key={i} />
          })}
        </div>
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
