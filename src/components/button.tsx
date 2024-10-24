import styled from "styled-components"

export default function Button({ label, onClick }: { label: string; onClick: () => void }) {
  
    return (
      <ButtonStyled onClick={onClick}>
        {label}
      </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    height: 12vh;
    width: 24svw;
    background-color: var(--bg-black);
    color: #c0c0c0;
    font-size: 2rem;
    font-family: "Carme", sans-serif;
    font-style: normal;
    border: none;
    &:hover{
        opacity: 0.6;
    }
`