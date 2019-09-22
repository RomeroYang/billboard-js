import { ApiPromise, WsProvider } from '@polkadot/api';

// initialise via static create
let api = {};
// const wsProvider = new WsProvider('wss://poc-3.polkadot.io');
const provider = new WsProvider('ws://127.0.0.1:9944/');
ApiPromise.create({ provider }).then(res => {
  api = res;
});

// make a call to retrieve the current network head

let baseURL = 'https://node.hashgard.com/testnet/api';
// if (!location.hostname.match('gardplorer.io')) {
//   baseURL = 'http://api.hgdev.io';
// }

const exp = {
  getApi: () => {
    return api;
  }
};

export default exp;
