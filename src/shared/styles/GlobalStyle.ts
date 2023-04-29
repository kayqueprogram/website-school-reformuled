import { createGlobalStyle } from "styled-components";
import { device } from "./breakPoints";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    @media ${device.md} {
        html {
            font-size: 40%;
        }
    }

    @media ${device.xs} {
        html {
            font-size: 38%;
        }
    }
`;

export default GlobalStyle;