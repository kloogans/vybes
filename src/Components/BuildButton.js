import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
// Connect container to the passed down prop store.
import { connect } from 'react-redux'
import { buildPlaylist } from '../Actions/buildPlaylist'
import { Link } from 'react-router-dom'

class BuildButton extends Component {
  state = {
    hover: false
  }

  _hover = () => {
    this.setState({
      hover: !this.state.hover
    })
  }
  render () {
    const bars = [0, 1, 2, 3, 4, 5, 6, 7]
    return <div className='container section spotify-iframe'>
      <Link to='/playlist'>
        <div className='playlist-button'
          onClick={() => this.props.buildPlaylist(this.props.artists)}
          onMouseOver={this._hover} onMouseOut={this._hover}>
          <div className='sound-bars'>
            <span className={this.state.hover ? 'hidden' : 'visible'}>Go</span>
            {bars.map((_, i) => {
              return <div className={this.state.hover ? 'bar move' : ''} key={i} />
            })}
          </div>
        </div>
      </Link>
    </div>
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

// Passes an action to a component
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    buildPlaylist: buildPlaylist
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BuildButton)
