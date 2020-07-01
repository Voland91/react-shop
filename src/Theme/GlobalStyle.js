import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100;400;700&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        overflow-y: scroll;
    }

    body {
        font-family: 'Catamaran', sans-serif;
    }
`;

export default GlobalStyle;
