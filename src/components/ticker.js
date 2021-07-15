import React from 'react'
import { connect } from "react-redux";
import Loading from './Loading';
import NumericLabel from 'react-pretty-numbers';
import classnames from "classnames";
import "../App.css";
import { open, close, updateTicker } from "../redux/actions/actions";


function ticker({ data }) {
  return (
    data.fetched ? (
      <div className="Ticker d-flex justify-content-between align-items-center bg-dark text-light">
        <div className="Ticker-left d-flex justify-content-center align-items-center">
          <div>
            <button className="btn btn-primary" onClick={close}>Close</button>
            <button className="btn btn-success" onClick={open}>open</button>
          </div>
          <div>
            <img
              src="https://www.bitfinex.com/assets/BTC-alt-1ca8728fcf2bc179dfe11f9a0126bc303bee888bff8132c5ff96a4873cf9f0fb.svg"
              width="40"
              height="40"
              alt="BTC"
            />
          </div>
          <div>
            <h5 className="mb-0">BTC / USD</h5>
            <div>VOL <NumericLabel>{data.vol}</NumericLabel>  BTC</div>
            <div>LOW <NumericLabel>{data.low}</NumericLabel></div>
          </div>
        </div>
        <div className="Ticker-right">
          <div>
            <h5 className="mb-0"><NumericLabel>{data.bid}</NumericLabel></h5>
            <div className={classnames({
              'text-danger': data.change_percent < 0,
              'text-success': data.change_percent > 0,
            })}>
              <NumericLabel>{data.change}</NumericLabel>
              <i className={classnames('fa', {
                'fa-caret-down': data.change_percent < 0,
                'fa-caret-up': data.change_percent > 0,
              })} />
              <span>(<NumericLabel>{data.change_percent}</NumericLabel>)</span>
            </div>
            <div>HIGH <NumericLabel>{data.high}</NumericLabel></div>
          </div>
        </div>
      </div>

    ) : <Loading />
  )
}

const mapStateToProps = state => ({
  data: state.ticker
}
)
const mapDispatchToProps = (dispatch) => {
  return {
    open: () => dispatch(open()),
    close: () => dispatch(close())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ticker);