import axios from 'axios'

const spotifyClient = (artist) => {
  return axios.get(`${artist.href}/top-tracks?country=US`)
              .then((response) => {
                return response.data
              })
              .catch(error => console.log('There was an error: ', error))
}

const concatPlaylist = (tracks, remainingCalls) => {
  return {
    type: 'BUILDING_PLAYLIST',
    payload: tracks,
    remainingCalls
  }
}

const buildPlaylist = (artists) => {
  let totalCalls = artists.length
  return (build) => {
    for (let i = 0; i < artists.length; i++) {
      spotifyClient(artists[i])
        .then(response => {
          totalCalls -= 1
          build(concatPlaylist(response.tracks.map(track => track.id), totalCalls))
        })
        .catch(error => console.log(error))
    }
  }
}

export { spotifyClient, concatPlaylist, buildPlaylist }
