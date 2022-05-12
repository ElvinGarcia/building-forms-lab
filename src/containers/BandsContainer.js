import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandList from '../components/BandList';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    const bandList = () => this.props.bands.map((band,index) => <BandList key={index} id={index} name={band.name}/>)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
        {bandList()}
        </ul>

      </div>
    )
  }
}

const mapDispatchToProps = (dispath) => {
  return {addBand: band=> dispath({type:"ADD_BAND", payload: band})}
}

const mapStateToProps = state => {
  return {bands: state.bands}
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
