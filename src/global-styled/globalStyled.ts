import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root { 
        --main-background: #FFF;
        --screen-background: #121A26;
        --btn: #000;
        --white: #fff;
        --white-text: #fff;
    }

    body{
        min-width: 100vw;
        min-height: 100vh;
        background-color: var(--main-background);
        color: var(--white-text);
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Roboto', sans-serif;
        padding: 2%;
    }
`