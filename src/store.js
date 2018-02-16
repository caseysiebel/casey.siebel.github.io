import { createStore } from 'redux';
import Peer from 'peerjs';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_PEER': {
      const peer = new Peer({ key: 'lwjd5qra8257b9' });
      //peer.on('open', 
      return { ...state, peer };
    }
    case 'OPEN': {
      console.log('in opne')
      const { id } = action;
      return { ...state, id }; 
    }
    default: 
      return state;
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
