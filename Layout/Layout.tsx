import React from "react";
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
      <Navbar />
      <Flex>
        <Sidebar />
        {children}
      </Flex>
    </LayoutWrapper>
  );
};

export default Layout;
