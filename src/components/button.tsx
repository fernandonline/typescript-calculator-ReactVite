import styled from "styled-components"

export default function Button({ label, onClick }: { label: string; onClick: () => void }) {
  
    return (
      <ButtonStyled onClick={onClick} type="button">
        {label}
      </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    height: 9vh;
    width: 20svw;
    background-color: var(--bg-black);
    color: #FFF;
    font-size: 2.5em;
    font-family: "Carme", sans-serif;
    font-style: normal;
    border: none;
    &:hover{
        opacity: 0.6;
    }
`