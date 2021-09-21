import React, { Component } from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Restaurante La Providencia</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          {/*Jumbotron me permite agregar alguna informacion en la parte superiorr de mi header */}
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Restaurante Con Sabor</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;