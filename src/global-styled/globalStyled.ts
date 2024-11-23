import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--fonte-padrao);
    }

    :root { 
        --screen-background: #121A26;
        --white-text: #fff;
        --bg-black: #000;
        --fonte-padrao: "Carme", sans-serif;
    }

    body {
        background-color: var(--bg-black);
        height: 100svh;
        color: var(--white-text);
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: var(--fonte-padrao);
        font-weight: 400;
        font-style: normal;

        border: 1px solid white;
    }
`