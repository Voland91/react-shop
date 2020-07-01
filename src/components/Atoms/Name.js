import styled from "styled-components";

const Name = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
  margin: revert;
`;

export default Name;
