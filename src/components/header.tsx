import styled from "styled-components";

export default function Header () {
    return (
        <Cabecalho>
            calculadora
        </Cabecalho>
    )
}

const Cabecalho = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
`