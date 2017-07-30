import { Component } from 'preact';
import axios from 'axios';

export const Errors = (props) => (
    props.error ?
        (<div class="w-100 db ba bw2 b--dark-red dark-red fw6 mb2 pv2 ph4">
            <p>Error(s) occurred:</p>
            {props.messages ?
                <ul class="">
                    {props.messages.map(m => (<li>{m}</li>))}
                </ul>
                : "An error occurred while fetching data. Perhaps your IP has been blacklisted from the etherscan and/or the Cryptocompare APIs."
            }
        </div>)
        : null
)