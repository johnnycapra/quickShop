import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class Header extends Component {

  render () {
    return (
      <div>
        <Navbar>
          <NavItem href="jsx-a11y">Home</NavItem>
          <NavItem href="jsx-a11y">Cart</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default Header;
