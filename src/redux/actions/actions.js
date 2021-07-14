import { UPDATE_TICKER } from "./types";

let wss, msg;

export const updateTicker = () => dispatch => {
  wss = new WebSocket("wss://api.bitfinex.com/ws/2");
  wss.onopen = () => {
    msg = JSON.stringify({
      event: 'subscribe',
      channel: 'ticker',
      symbol: 'tBTCUSD'
    })
    wss.send(msg);
    console.log('connected')
  };

  wss.onmessage = (msg) => {
    const parsedData = JSON.parse(msg.data);
    if (Array.isArray(parsedData[1])) {
      dispatch({
        type: UPDATE_TICKER,
        payload: parsedData[1]
      })
      console.log(parsedData[1])
    }
  };

  wss.onclose = () => {
    console.log('Dis connected')
  }

}

export const close = () => dispatch => {
  wss.close();
};

export const open = () => dispatch => {
  updateTicker();
};