import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    const bandList = ()=> this.props.bands.map( (band,index)=> <li key={index}>{band.name}</li>)
    return(
      <div>
        {bandList()}
      </div>
    )
  }
}


export default connect((state)=>({bands:state.bands}))(BandsContainer)
