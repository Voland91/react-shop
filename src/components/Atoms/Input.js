import styled, { css } from "styled-components";

const TextInput = styled.input`
  ${({ radio }) =>
    radio &&
    css`
      margin-right: 5px;
    `}
`;

export default TextInput;
