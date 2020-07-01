import styled, { css } from "styled-components";

const H1 = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 30px;
  text-transform: uppercase;
  padding: 15px 0;
  font-weight: ${({ theme }) => theme.normal};

  ${({ small }) =>
    small &&
    css`
      font-size: 22px;
      padding: 5px 0;
    `}
`;

export default H1;
