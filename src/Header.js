import React from 'react';

const Header = (props) => (
  <header className="App-header">
    { props.id && <h1>{ props.id  }</h1> }
  </header>
);

export default Header;
