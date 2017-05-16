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
          <h2 className='big-heading centered'>Playlist</h2>
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
            src={`https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Playlist:${this.props.tracks.join()}`}
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
    // else if (this.props.artists.length !== 0) {
    //   return (
    //     <div className='container section spotify-iframe'>
    //       <Link to='/playlist'>
    //         <div className='playlist-btn'
    //           onClick={() => this.props.buildPlaylist(this.props.artists)}>
    //           Create Playlist
    //         </div>
    //       </Link>
    //     </div>
    //   )
    // }
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
