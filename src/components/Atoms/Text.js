import styled, { css } from "styled-components";

const Text = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.thin};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${({ theme }) => theme.bold};
    `}
`;

export default Text;
