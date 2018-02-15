import React from 'react';

class CallForm extends React.Component {
  render() {
    return (
      <form>
        <input className="id" type="text" />
        <button type="submit">Call</button>   
      </form>
    );
  }
}

export default CallForm;
