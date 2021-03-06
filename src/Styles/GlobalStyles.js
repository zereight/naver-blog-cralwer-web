import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    margin:10px;
    background-color: green;
    width:100%;
    height: 100vh;
`;

export default globalStyles;
