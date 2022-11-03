import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const LayoutWrapper = styled.div`
  background-color: black;
  overflow-x: hidden;
`;
const Flex = styled.div`
  display: flex;
`;

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col>{children}</Col>
      </Row>
    </LayoutWrapper>
  );
};

export default Layout;
