import { createStore } from 'redux';

const reducer = (state = {}, action) => {
  console.log('state')
  console.log(state)
  console.log('action')
  console.log(action)
  console.log('');
  switch (action.type) {
    case 'OPEN': {
      const { peer, id } = action;
      return { ...state, peer, id }; 
    }
    default: 
      return state;
  }
};

export default createStore(reducer);
