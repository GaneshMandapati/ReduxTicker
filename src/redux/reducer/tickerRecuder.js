const initialState = {
  vol: null,
  low: null,
  high: null,
  bid: null,
  change: null,
  change_percent: null,
  fetched: false,
  connected: false
}

const tickerRecuder = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_TICKER':
      return {
        ...state,
        low: action.payload[9],
        high: action.payload[8],
        vol: action.payload[7],
        change: action.payload[4],
        change_percent: action.payload[5] * 100,
        bid: action.payload[6],
        fetched: true
      }
    case 'CONNECT':
      return {
        ...state,
        connected: action.connected
      }
    default:
      return state;
  }
}

export default tickerRecuder;