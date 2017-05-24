import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { removeArtist } from '../Actions/removeArtist'

class SelectedArtists extends Component {
  render () {
    if (this.props.built) {
      return (<span />)
    } else if (this.props.selected.artists.length > 0) {
      return (
        <div className='container artist'>
          <h2>Selected Artists</h2>
          <ul className='selected-artists'>
            {this.props.selected.artists.map((artist) =>
              <li className='artist-card' key={artist.id}>
                <div className='artist-content'>
                  <div className='remove-artist'
                    onClick={() => this.props.removeArtist(artist)}>
                    <i className='fa fa-close' />
                  </div>
                  <div className='artist-img'
                    style={{backgroundImage: `url(${artist.images[2].url})`}} />
                  <p className='artist-title'>{artist.name}</p>
                  <a className='artist-url' target='_blank'
                    href={artist.external_urls.spotify}>
                    View on Spotify
                  </a>
                </div>
                <div className='artist-blur' />
              </li>
            )}
          </ul>
        </div>
      )
    } else {
      return (
        <span />
      )
    }
  }
}
// Containers data
const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    built: state.playlist.built
  }
}

// Link dispatch to props.
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeArtist: removeArtist
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectedArtists)
