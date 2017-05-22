let initialState = {
  tracks: [],
  inProgress: false,
  built: false
}

 // Randomize array element order in-place.

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array.splice(0, 20)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BUILDING_PLAYLIST':
      state = {...state,
        tracks: state.tracks.concat(action.payload)}
      if (action.remainingCalls === 0) {
        state = {...state,
          tracks: shuffleArray(state.tracks),
          inProgress: false,
          built: true}
      } else {
        state = {...state, inProgress: true}
      }
      break
    case 'TOP_TRACKS_FETCHING':
      state = {...state}
      break
    default:
      state = {...state}
      break
  }
  return state
}
