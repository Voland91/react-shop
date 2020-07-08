import styled, { css } from "styled-components";

const Image = styled.img`
  width: 80%;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    width: 90%;
  }

  ${({ cart }) =>
    cart &&
    css`
      width: 100%;
      &:hover {
        width: 100%;
      }
    `}
`;

export default Image;
