import { connect } from 'react-redux';
import React, { Component } from 'react';
import Peer from 'peerjs';

import Header from './Header';
import CallForm from './CallForm';
import Video from './Video';

class App extends Component {
  componentDidMount() {
    const peer = new Peer({ key: 'lwjd5qra8257b9' });
    peer.on('open', (id) => this.props.open(peer, id));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <CallForm />
        <Video />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const open = (peer, id) => ({
  type: 'OPEN',
  peer,
  id
});

export default connect(mapStateToProps, { open })(App);
