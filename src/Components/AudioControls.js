import React, { Component } from 'react'

class AudioControls extends Component {
  _click = () => {
    this.props.click()
  }
  render () {
    return <div className='audioButtons'>
      <button className='playButton' onClick={this._click}><i className='fa fa-play' /></button>
      <button className='pauseButton' onClick={this.props.pauseAudio}><i className='fa fa-pause' /></button>
    </div>
  }
}

export default AudioControls
