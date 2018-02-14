import React, { Component } from 'react';
import { Card, CardPanel, Col, Row, Button } from 'react-materialize';
import { removeFromCart } from '../actions/cart';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Cart extends Component {

  render () {
    let { id, price, title } = this.props.cart;

    return (
      <div>
        <CardPanel className="black-text panel">
          {title}
          <Button onClick={() => this.props.removeFromCart(id)}>DELETE</Button>
        </CardPanel>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return{
    removeFromCart: bindActionCreators(removeFromCart, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Cart);
