import axios from 'axios'

const searchArtist = (query) => {
  if (query !== '') {
    try {
      let searchUrl = `https://api.spotify.com/v1/search?q=${query}&type=artist&market=US`
      const token = window.localStorage.getItem('spotify:token')
      return {
        type: 'SEARCH_RESULTS',
        payload: axios.get(searchUrl, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  } else {
    return {
      type: 'EMPTY_SEARCH_QUERY',
      payload: {}
    }
  }
}

export { searchArtist }
