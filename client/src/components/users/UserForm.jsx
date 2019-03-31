import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  onSubmit(e){
    e.preventDefault();
    const userName = this.textInput.current.value;
    this.props.setUserName(userName);
    this.textInput.current.value = '';
  }
  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='form-group'>
          <input
            ref={this.textInput}
            type='text'
            className='form-control'
            placeholder='Set Your Name...' />
        </div>
      </form>
    )
  }
}

UserForm.propTypes = {
  setUserName: PropTypes.func.isRequired
}

export default UserForm
