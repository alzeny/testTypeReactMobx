import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
  component: any;
  path : string;
}

// class PrivateRoute extends React.Component<PrivateRouteProps> {
//   render() { 
//     return (<Route 
//             render= {props =>
//               (<React.Component {...props} /> ) 
//             }
//           />
//         )
//   }
// }



const PrivateRoute = ({ ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (
        <Component {...props} />
      )
    }
  />
);

export default PrivateRoute;