import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import styled from "styled-components";
const BtnWrapper = styled.div`
  background-color: white;
  border-radius: 20px;
  color: black;
  width: 170px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.3s;
  padding: 5px;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    opacity: 0.6;
  }
`;

type Props = {
  title: any;
};

const Btn = ({ title }: Props) => {
  return (
    <BtnWrapper>
      <div>{title}</div>
      <div>
        <HiOutlineArrowRight size={25} />
      </div>
    </BtnWrapper>
  );
};

export default Btn;
