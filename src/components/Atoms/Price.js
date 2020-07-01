import styled from "styled-components";

const Price = styled.p`
  display: inline-block;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.blue};
  padding: 3px 0px;
  cursor: pointer;
`;

export default Price;
