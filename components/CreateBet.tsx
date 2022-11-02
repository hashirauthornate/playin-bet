import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
const BetWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: 20px;
  width: 370px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  font-weight: 800;
  cursor: pointer;
  color: ${(props) => props.theme.colors.fade};
  &:hover {
    border: 1px solid #cef458;
  }
`;
//cef458
type Props = {
  title: string;
  children: any;
  setPage?: any;
  page?: number;
};

const CreateBet = ({ title, setPage, page, children }: Props) => {
  return (
    <>
      {page && (
        <BetWrapper onClick={() => setPage(page + 1)}>
          <div>{title}</div>
          <div>{children}</div>
        </BetWrapper>
      )}
    </>
  );
};

export default CreateBet;
