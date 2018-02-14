import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {  addToCart } from '../actions/cart';

class  Camera extends Component {



  render () {

    let { id, title, image,  price } = this.props.camera;
    let starRate = "*".repeat(this.props.camera.rating);


    return (
      <div>
        <h4>{title}</h4>
        <img className="media-object" alt="BAHHH" src={image} />
        <h5>{this.props.camera.onSale === true ? `Price: $${price} ON SALE!!! ` : `Price: $${price}`}</h5>
        <h5>Rating: {starRate}</h5>
        <Button waves='light' onClick={() => this.props.addToCart(id)}>Add to Cart</Button>
      </div>

    )
  }
}


function mapDispatchToProps(dispatch){
  return{
    addToCart: bindActionCreators(addToCart, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Camera);
