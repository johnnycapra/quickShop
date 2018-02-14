import React, { Component } from 'react';
import Camera from './Camera';
import { Card, Input } from 'react-materialize';
import { filterPhrase } from '../actions/updatePhrase';
import { filterCameras } from '../actions/sortCameras';
import { getCart } from '../actions/cart';
import { getCameras } from '../actions/cameras';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import Cart from './Cart';



class Main extends Component {
  componentWillMount(){
    this.props.getCameras();
    this.props.getCart();
  }

  render () {

    let totalPrice = this.props.cart
    .map((cart, i) => {
      return cart.price
    }).reduce((a,b)=>{
      return a + b
    }, 0)

    let theCart = this.props.cart
    .map(cart => <Cart key={cart.id} cart={cart}/>)

    let theCameras = this.props.cameras
    .filter(camera => {
      if(!this.props.filterPhrase.length){
        return true;
      } else {
          return camera.title.toUpperCase().includes(this.props.filterPhrase.toUpperCase())
      }
    })
    .sort((a,b) => {
      if(a[this.props.filterCameras] > b[this.props.filterCameras]) {
        return 1;
      } else if (a[this.props.filterCameras] < b[this.props.filterCameras]) {
        return -1;
      } else {
        return 0;
      }
    })
    .map(camera => <Camera key={camera.id} camera={camera} />)

    return (
      <div className="container">
        <div className="row">
          <form className="col s8">
            <div className="row">
              <div className="input-field col s8">
                <Input
                  placeholder="Search..."
                  className="browser-default"
                  type="search"
                  onChange={ e => {this.props.updatePhrase(e.target.value)}}>
                </Input>
              </div>
              <div className="input-field col s4">
                <Input
                  type="select"
                  s={12}
                  className="browser-default"
                  defaultValue='title'
                  onChange={ (e) => {this.props.sortCameras(e.target.value)}}>
                  <option value='title'>Name</option>
                  <option value='rating'>Rating</option>
                </Input>
              </div>
            </div>
          </form>
          <div className="col s4">
          <Card className='blue-grey darken-1' textClassName='white-text' title='Your Total' actions={[<a href='jsx-a11y'>Checkout</a>]}>
            {theCart}
            <p><strong>Total:{totalPrice}</strong></p>
          </Card>
          </div>
          <div className="col s6">
            {theCameras}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cameras: state.cameras,
    cart: state.cart,
    filterCameras: state.sortCameras,
    filterPhrase: state.updatePhrase

  }
}

function mapDispatchToProps(dispatch){
  return {
    getCart: bindActionCreators(getCart, dispatch),
    getCameras: bindActionCreators(getCameras, dispatch),
    updatePhrase: bindActionCreators(filterPhrase, dispatch),
    sortCameras: bindActionCreators(filterCameras, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
