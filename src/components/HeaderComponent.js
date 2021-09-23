import React, { Component } from 'react'
import { Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
// etqueta tipo enlace
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };
    // Aca especificamos que la variable this.toogleNav ahora estara disponible y que apuntara a la funcion toogleNav() que esta vinculada/bindeada a this
    this.toogleNav = this.toogleNav.bind(this);
  }
  // para que este metodo este disponible en JSX, debemos bindear this con esta funcion en el constructor
  toogleNav(){
    this.setState({isNavOpen: !this.state.isNavOpen});
  }

  render() {
    return (
      <>
        {/* exapand especifica que se mostrara en su forma completa para pantallas medianas a extra grandes */}
        <Navbar dark expand="md">
          <div className="container">
            {/* Este boton NavbarToggler se va mostrar solo en pantallas extra pequeñas a pequeñas, pero para pantallas medianas y extra grandes este boton estara oculto */}
            {/* la funcion onClick tambien la podemos hacer con arrow function, es una forma de hacerlo sino la otra es vincularlo en el constructor del componente como lo haremos ahora.  */}
            <NavbarToggler onClick={this.toogleNav}/>
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="41" alt="Restaurante Rodrigo" />
            </NavbarBrand>
            <Collapse navbar isOpen={this.state.isNavOpen}>
              <Nav navbar>
                {/* NavItem para definir cada uno de los elementos de navegacion que incluiré en mi barra de nav */}
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg">Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg">About Us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg">Menu</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg">Contact Us</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          {/*Jumbotron me permite agregar alguna informacion en la parte superiorr de mi header */}
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Restaurante "Adri de Morris" para elSingle Page Applications Part 1 conourbano con Sabor</h1>
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