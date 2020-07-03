import styled from "styled-components";

const Name = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
  margin: 5px 0;
`;

export default Name;
