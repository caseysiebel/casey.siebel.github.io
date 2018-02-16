import React from 'react';
import { connect } from 'react-redux';

class CallForm extends React.Component {
  handleSubmitForm = (e) => {
    e.preventDefault();
    const id = this.idElm.value;
    this.idElm.value = '';
    this.props.sendCall(id);
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmitForm }>
        <input ref={ id => this.idElm = id } className="id" type="text" />
        <button type="submit">Call</button>   
      </form>
    );
  }
}
const mapStateToProps = ()=>({});
const sendCall = (id) => ({
  type: 'SEND_CALL',
  id
});

export default connect(mapStateToProps, { sendCall })(CallForm);
