import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  font-size: 13px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default Button;
