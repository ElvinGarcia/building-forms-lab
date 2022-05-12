// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

    state = {
      name: '',
    }



  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: '' });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' placeholder="Enter A BandName" autoFocus value={this.state.name}  onChange={this.handleChange}/>
          <br/>
          <input type="submit" value="submit" />
          </form>
      </div>
    )
  }
}

export default BandInput;
