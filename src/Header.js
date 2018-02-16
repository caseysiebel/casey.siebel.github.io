import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => (
  <header className="App-header">
    { props.id && <h1>{ props.id  }</h1> }
  </header>
);

const mapStateToProps = ({ id }) => ({ id });

export default connect(mapStateToProps)(Header);
