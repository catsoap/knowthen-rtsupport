import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  onSubmit(e){
    e.preventDefault();
    const channelName = this.textInput.current.value;
    this.props.addChannel(channelName);
    this.textInput.current.value = '';
  }
  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Add channel"
            type="text"
            ref={this.textInput}
          />
        </div>
      </form>
    )
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired,
}

export default ChannelForm;
