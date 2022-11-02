import React from "react";
import styled from "styled-components";
const SidbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  height: 100vh;
  width: 15%;
`;
const NavLink = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.fade};
  text-transform: uppercase;
  cursor: pointer;
  margin: 15px 0;
  &:hover {
    color: ${(props) => props.theme.colors.green};
  }
`;
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <SidbarWrapper>
      <NavLink>bets</NavLink>
      <NavLink>Search</NavLink>
      <NavLink>Leaders</NavLink>
      <NavLink>Exchange</NavLink>
      <NavLink>MarketPlace</NavLink>
    </SidbarWrapper>
  );
};

export default Sidebar;
