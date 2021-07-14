import './App.css';
import { useEffect } from "react";
import { updateTicker } from "./redux/actions/actions";
import { connect } from "react-redux";
import Ticker from "./components/ticker";
import { open, close } from "./redux/actions/actions";

function App({ updateTicker }) {
  useEffect(() => {
    updateTicker()
  }, [])
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className="Ticker-Contols">

      </div>
      <Ticker />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTicker: () => dispatch(updateTicker())
  };
};

export default connect(null, mapDispatchToProps)(App);