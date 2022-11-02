import Image from "next/image";
import React from "react";
import styled from "styled-components";
import logo from "../public/logo.png";
import ethereumIcon from "../public/ethereumIcon.png";
import playinicon from "../public/playinIcon.png";
import avatar from "../public/avatar.png";
const NavbarWrapper = styled.div`
  padding: 55px 35px;
  display: flex;
  justify-content: space-between;
`;
const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Item = styled.div`
  color: white;
  font-weight: 800;
  font-size: 25px;
  margin: 0 20px;
`;
const Line = styled.div`
  border-left: 1px solid #ada9a9;
  height: 40px;
  margin: 0 20px;
  opacity: 0.6;
`;
type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavbarWrapper>
      <Image src={logo} alt="Logo" />
      <ItemsWrapper>
        <Image src={ethereumIcon} alt="ethereum icon" />
        <Item>$4,124.01</Item>
        <Image src={playinicon} alt="play icon" />
        <Item>$100</Item>
        <Line />
        <Image src={avatar} alt="avatar" />
      </ItemsWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
