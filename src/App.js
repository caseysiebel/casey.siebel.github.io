import { connect } from 'react-redux';
import React, { Component } from 'react';
import Peer from 'peerjs';

import Header from './Header';
import CallForm from './CallForm';
import Video from './Video';

class App extends Component {
  componentDidMount() {
    this.props.initPeer();  
  } 
  componentWillUpdate(nextProps) {
    if (nextProps.peer) {
      nextProps.peer.on('open', this.props.open);
    }
  }
  render() {
    { console.log('peer', this.props.peer) }
    return (
      <div className="App">
        <Header />
        <CallForm />
        <Video />
      </div>
    );
  }
}

const mapStateToProps = ({ peer }) => ({ peer });
const initPeer = () => ({ type: 'INIT_PEER' });
const open = (id) => ({
  type: 'OPEN',
  id
});

export default connect(mapStateToProps, { initPeer, open })(App);
