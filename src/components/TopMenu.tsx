
import React, { Component } from "react";
import { AuthStore, User } from "../stores/AuthStore";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { inject, observer } from "mobx-react";

interface ITopMenu extends RouteComponentProps{
    authStore? : AuthStore 
}

@inject('authStore')
@observer
class TopMenu extends Component<ITopMenu>{
    
    signOut = () => {
        this.props.authStore!.singOut();
    };

    render() {
        return (
            <Navbar color="light" light expand="md">
             {!this.props.authStore!.isUserSingin() && (
              <Nav className="mr-auto" navbar>
                   <NavItem>
                    <NavLink tag={Link} to= {process.env.PUBLIC_URL + "/register"}>
                      Sign Up
                    </NavLink>
                 </NavItem> 
                  <NavItem>
                      <NavLink
                          tag={Link}
                          to={ `${process.env.PUBLIC_URL}/login`}>
                          Login
                      </NavLink>
                  </NavItem>
               </Nav>
              )}
              
              {this.props.authStore!.isUserSingin() && (
                  <Nav className="mr-auto" navbar>
                      <NavItem>
                          <NavLink tag={Link} to={"#"}>
                              {this.props.authStore!.getUserName()}
                          </NavLink>
                      </NavItem>
                  </Nav>
                  )
                }
       
              <Nav className="ml-auto" navbar>
                  {this.props.authStore!.isUserSingin() && (
                      <NavItem>
                          <NavLink href="#" onClick={this.signOut}>
                              Sign Out
                          </NavLink>
                      </NavItem>
                  )}
                 <NavItem>
                    <NavLink
                      href="#"
                      onClick={() => {
                        this.props.history.push({
                          pathname: location.pathname,
                          state: {
                            isOpenModal: true
                          }
                        });
                      }}>
                      Cart
                    </NavLink>
                 </NavItem>
              </Nav>
            </Navbar>
          );
    }
}


export default withRouter(TopMenu);