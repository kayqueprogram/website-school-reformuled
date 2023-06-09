import { createGlobalStyle } from "styled-components";
import { device } from "./breakPoints";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

   html{
    font-size: 64.5%;
   }

    body {
       font-size: 1.6rem;
       background-color:rgb(223 223 223);
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
            font-size: 40%;
        }
    }
`;

export default GlobalStyle;
