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

  ${({ cart }) =>
    cart &&
    css`
      text-transform: uppercase;
      font-size: 10px;
      font-weight: ${({ theme }) => theme.bold};
    `}

    ${({ cart }) =>
      cart &&
      css`
      margin-left: 15px
        font-size: 14px;
        font-weight: ${({ theme }) => theme.bold};
        color: ${({ theme }) => theme.white};
      `}
`;

export default Text;
