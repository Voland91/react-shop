import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Button from "../Atoms/Button";

// const StyledRelativeWrapper = styled.div`
//   position: relative;
//   height: 100vh;
// `;

const StyledCartWrapper = styled.aside`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const StyledContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 600px;
  height: 700px;
  box-shadow: 0px 0px 20px -5px rgba(11, 16, 43, 1);
`;

const Cart = () => {
  const history = useHistory();

  return (
    <StyledCartWrapper>
      <StyledContentWrapper>
        <Button onClick={history.goBack}>CLOSE</Button>
      </StyledContentWrapper>
    </StyledCartWrapper>
  );
};

export default Cart;
