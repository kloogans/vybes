import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
// Connect container to the passed down prop store.
import { connect } from 'react-redux'
import { buildPlaylist } from '../Actions/buildPlaylist'
// import AudioControls from './AudioControls'
// import { Link } from 'react-router-dom'

// Abstract: Builds the spotify playlist
class Playlist extends Component {
  playAudio () {
    this.refs.player.play()
  }

  pauseAudio () {
    this.refs.player.pause()
  }

  _click = () => {
    console.log(this.props.tracks.preview_url)
  }
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
          {/* <ul className='playlist'>
            <li className='playlist-item'>
              <audio ref='player' id='player' autoPlay>
                <source src={this.props.tracks.preview_url} type='audio/mp3' />
              </audio>
              <AudioControls click={this._click} playAudio={this.playAudio.bind(this)}
                pauseAudio={this.pauseAudio.bind(this)} />
            </li>
          </ul> */}
          <iframe
            src={`https://embed.spotify.com/?theme=black&uri=spotify:trackset:My Playlist:${this.props.tracks.join()}`}
            height='400'
            width='100%'
          />
        </div>
      )
    } else {
      return (
        <span />
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

// Export this file as a container, aka smart component.
export default connect(mapStateToProps, matchDispatchToProps)(Playlist)
