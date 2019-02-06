import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignInPage from './pages/SignIn'
import RegicterPage from './pages/Register'
import SearchPage from './pages/Search'
import PrivateRoute from './services/PrivateRoute'
import RootLayout from "./layouts/RootLayout";

// todo move service getName
let shop : string = 'Some internet ShopName'

class Routes extends React.Component {
  render()  {
    return (
    <Router>
      <RootLayout shopName={shop}>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          component={
              () => (
                  <Redirect
                    to={{ pathname: process.env.PUBLIC_URL + "/search" }}
                  />
                )
          }
        />
        <Route
          path={process.env.PUBLIC_URL + "/register"}
          component={RegicterPage}
        />
        <Route path={process.env.PUBLIC_URL + "/login"} component={SignInPage} />
        <PrivateRoute
          path={process.env.PUBLIC_URL + "/search"}
          component={SearchPage}
        />
      </RootLayout>
    </Router>
    )
  }
}

export default Routes;