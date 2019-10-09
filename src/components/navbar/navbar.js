import React, { Component } from "react";
import "./navbar";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { connect } from "react-redux";
import firebase from "../../config";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  login = () => {
    firebase
      .auth()
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then(res => localStorage.setItem("res", res));
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">
            OShop
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/shopping-cart">
                  shopping-cart
                  <span className="badge badge-warning badge-pill">
                    {this.props.item.length}
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <FirebaseAuthConsumer>
                  {({ isSignedIn, user, providerId }) => {
                    if (isSignedIn) {
                      return (
                        <NavLink tag={Link} to="#">
                          {user.displayName}
                        </NavLink>
                      );
                    } else
                      return (
                        <NavLink tag={Link} to="#">
                          Login
                        </NavLink>
                      );
                  }}
                </FirebaseAuthConsumer>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.cart.items
});
export default connect(
  mapStateToProps,
  null
)(NavBar);
