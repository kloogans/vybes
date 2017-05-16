const selectArtist = (artist) => {
  return {
    type: 'SELECT_ARTIST',
    payload: artist
  }
}

export { selectArtist }
