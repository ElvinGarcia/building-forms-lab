// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';


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
          <input type='text' value={this.state.name} placeholder="Enter A BandName" onChange={this.handleChange}/>
          <br/>
          <input type="submit" value="submit" />
          </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispath) => {
  return {addBand: band=> dispath({type:"ADD_BAND", payload: band})}
}

export default connect(null, mapDispatchToProps)(BandInput)
