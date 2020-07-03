import styled, { css } from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  font-size: 13px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ cart, src }) =>
    cart &&
    css`
      background: url(${src});
      background-repeat: no-repeat;
      background-color: transparent;
      height: 24px;
      width: 24px;
    `};

  ${({ cartSmall, src }) =>
    cartSmall &&
    css`
      background: url(${src});
      background-repeat: no-repeat;
      background-color: ${({ theme }) => theme.blue};
      margin: 10px;
      padding: 4px 10px;
      color: ${({ theme }) => theme.white};
      border: 2px solid ${({ theme }) => theme.blue}
      transition: 0.2s;
      border-radius: 5px;

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.blue};
      }
    `};
`;

export default Button;
