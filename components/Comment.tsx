import styled from "styled-components";

const CommnetWrapper = styled.div`
  display: flex;
  font-weight: 800;
  align-items: center;
  color: ${(props) => props.theme.colors.fade};
  & > div {
    flex: 0.04;
  }

  margin: 10px;
`;
import React from "react";
import { Stack } from "react-bootstrap";

type Props = {
  comment: number;
  children: any;
};

const Comment = ({ comment, children }: Props) => {
  return (
    <CommnetWrapper>
      <Stack direction="horizontal" gap={1}>
        {children}
        {comment}
      </Stack>
    </CommnetWrapper>
  );
};

export default Comment;
