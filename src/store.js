import { createStore } from 'redux';
import Peer from 'peerjs';

import getLocalStream from './getLocalStream';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_PEER': {
      const peer = new Peer({ key: 'lwjd5qra8257b9' });
      //peer.on('open', 
      return { ...state, peer };
    }
    case 'OPEN': {
      const { id } = action;
      return { ...state, id }; 
    }
    case 'SEND_CALL': {
      const { id } = action;
      const localStream = getLocalStream();
      console.log('localStream', localStream);
      const call = state.peer.call(id, localStream);
      return { ...state, call };
    }
    default: 
      return state;
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
