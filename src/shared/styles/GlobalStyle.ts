import { createGlobalStyle } from "styled-components";
import { device } from "./breakPoints";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

   html{
    font-size: 62.5%;
    font-family: 'Noto Sans KR', sans-serif;
   }

    body {
       font-size: 1.6rem;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    html{
        @media ${device.md} {
            font-size:48%;
        }

        @media ${device.sm} {
            font-size: 34%;
        }
    }
`;

export default GlobalStyle;