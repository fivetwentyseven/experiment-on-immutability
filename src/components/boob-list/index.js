import { Component } from "preact";
import Boob from "../boob";
import ScrollableAnchor from "react-scrollable-anchor";
import axios from "axios";
import { txs } from "../../lib/txs";

export default class BoobList extends Component {
  componentWillMount() {
    // Fetch the current exchange rate.
    axios
      .get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
      .then(({ status, data }) => {
        if (status != 200) {
          throw new Error(
            `Status code ${status} while fetching the ETHUSD exchange rate (Cryptocompare API).`
          );
        }
        this.setState({ ethUsd: data.USD });
      })
      .catch(err => {
        console.log(err);
        this.props.signalError(
          `${err.message}, while fetching the current ETHUSD exchange rate (Cryptocompare API).`
        );
      });

    // Fetch the current block number.
    axios
      .get("https://api.etherscan.io/api?module=proxy&action=eth_blockNumber")
      .then(({ status, data }) => {
        if (status != 200) {
          throw new Error(
            `Status code ${status} while fetching the current block number (etherscan API).`
          );
        }
        this.setState({ latestBlock: parseInt(data.result.substring(2), 16) });
      })
      .catch(err => {
        console.log(err);
        this.props.signalError(
          `${err.message}, while fetching the current block number (etherscan API).`
        );
      });
  }

  render({ signalError }, { ethUsd, latestBlock }) {
    return (
      <ScrollableAnchor id={"boobs"}>
        <div class="cf">
          <div class="bg-light-green mv2 w-100 pa2 tc fw6">
            Images, TX data and exchange rate are fetched real-time via the
            Etherscan and Cryptocompare APIs.
          </div>

          {txs.map((tx, i) =>
            <div
              class={
                "fl w-50-ns mv3 w-100 " +
                (i % 2 === 0 ? "pr3-ns pl0-ns" : "pl3-ns pr0-ns")
              }
            >
              <Boob
                txid={tx}
                ethUsd={ethUsd}
                latestBlock={latestBlock}
                signalError={signalError}
              />
            </div>
          )}
        </div>
      </ScrollableAnchor>
    );
  }
}
