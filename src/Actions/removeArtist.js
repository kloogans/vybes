const removeArtist = (artist) => {
  return {
    type: 'REMOVE_ARTIST',
    payload: artist
  }
}

export { removeArtist }
