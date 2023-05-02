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
            font-size:50%;
        }

        @media ${device.sm} {
            font-size: 36%;
        }
    }
`;

export default GlobalStyle;