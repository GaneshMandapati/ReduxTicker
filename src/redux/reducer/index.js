import { combineReducers } from 'redux';
import tickerReducer from "./tickerRecuder";


export default combineReducers({
  ticker: tickerReducer
});