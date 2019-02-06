import React from "react";

import { Container, Row, Col } from "reactstrap";
import TopMenu from "../components/TopMenu";

interface RootLayoutProps {
  shopName?: string;
}

export default class RootLayout extends React.Component<RootLayoutProps> {
  render()  {
    return (<Container>
           <Row>
             <Col>
               <TopMenu/>
             </Col>
           </Row>
           <Row>
             <Col>{this.props.shopName}</Col>
             <Col>{this.props.children}</Col>
           </Row>
         </Container>)
  }
}
