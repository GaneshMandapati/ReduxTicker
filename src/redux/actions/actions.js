import { UPDATE_TICKER, CONNECT } from "./types";

let wss, msg;

export const updateTicker = () => dispatch => {
  wss = new WebSocket("wss://api.bitfinex.com/ws/2");

  wss.onmessage = (msg) => {
    const parsedData = JSON.parse(msg.data);
    if (Array.isArray(parsedData[1])) {
      dispatch({
        type: UPDATE_TICKER,
        payload: parsedData[1]
      })
    }
  };

  wss.onopen = () => {
    msg = JSON.stringify({
      event: 'subscribe',
      channel: 'ticker',
      symbol: 'tBTCUSD'
    })
    wss.send(msg);
    dispatch({
      type: CONNECT,
      connected: true
    })
    console.log('connected');
  };

  wss.onclose = () => {
    dispatch({
      type: CONNECT,
      connected: false
    })
    console.log('Disconnected')
  }

}

export const close = () => {
  wss.close();
};

export const open = () => {
  updateTicker();
};