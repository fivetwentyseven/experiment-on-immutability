import { Component } from "preact";
import axios from "axios";

export default class Boob extends Component {
  txUrlPrefix = "https://etherscan.io/tx/";

  hexToBase64 = hexstring =>
    btoa(
      hexstring
        .match(/\w{2}/g)
        .map(s => String.fromCharCode(parseInt(s, 16)))
        .join("")
    );

  componentDidMount() {
    axios
      .get(
        `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${this
          .props.txid}`
      )
      .then(({ status, data: { result } }) => {
        if (status != 200) {
          throw new Error(
            `Status code ${status} while fetching TX ${this.props.txid}.`
          );
        }

        const gas = parseInt(result.gas.substring(2), 16),
          gasPrice = parseInt(result.gasPrice.substring(2), 16);

        this.setState({
          imageb64: this.hexToBase64(result.input.substring(2)),
          etherscanUrl: this.txUrlPrefix + result.hash,
          hashTrunc: result.hash.substr(0, 29) + "...",
          gas,
          gasPrice,
          blockNumber: parseInt(result.blockNumber.substring(2), 16),
          txCost: gas * gasPrice / Math.pow(10, 18)
        });
      })
      .catch(err => {
        console.log(err);
        this.props.signalError(
          `${err.message}, while fetching TX ${this.props.txid}.`
        );
      });
  }

  render({ ethUsd, latestBlock, txid }, state) {
    const confirmations = latestBlock - state.blockNumber;
    const txCostUsd = ethUsd
      ? Math.floor(state.txCost * ethUsd * 100) / 100
      : "";

    return (
      <article class="shadow-1 db w-100 cf mb4-ns ba dark-gray b--black-20 bg-white">
        <div class="db h-100 relative">
          {confirmations
            ? <span class="small absolute right-0 white f7 ttl bg-green pa2">{`${confirmations} confirmations`}</span>
            : null}
          {state.imageb64
            ? <a
                class="cf"
                href={state.etherscanUrl}
                target="_blank"
                onClick={() => window.ga("send", "event", "txs", "click", txid)}
              >
                <img
                  class="db w-100 h-100"
                  src={"data:image/jpeg;base64," + state.imageb64}
                />
              </a>
            : <div class="w-100 h3 bg-light-silver white pa3 flex justify-start items-center">
                Loading...
              </div>}
        </div>

        <p class="f5 lh-copy ma0 w-100 gradient-1 white ttu ph3 pv2">
          <strong>Block</strong> #{state.blockNumber}
        </p>

        <div class="pa3">
          <h3 class="f4-ns lh-title f5 mb2 mt0 link bb b--light-gray pb3">
            Transaction <br />
            {state.hashTrunc}
          </h3>

          <p class="f5 lh-copy ma0 dark-gray mb1">
            <strong>Cost: </strong> {state.txCost} ETH (${txCostUsd})
          </p>

          <p class="f6 lh-copy ma0 gray">
            Gas: {state.gas} / Gas price: {state.gasPrice}
          </p>

          <a
            class="mt3 f6 link dim ba ph3 pv2 mb2 dib blue mt2"
            href={state.etherscanUrl}
            target="_blank"
            onClick={() => window.ga("send", "event", "txs", "click", txid)}
          >
            View on etherscan.io
          </a>
        </div>
      </article>
    );
  }
}
