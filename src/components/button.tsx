import styled from "styled-components"

export default function Button({ label, onClick }: { label: string; onClick: () => void }) {
  
    return (
      <ButtonStyled onClick={onClick}>
        {label}
      </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    height: 10vh;
    width: 10vw;
    background-color: var(--btn);
    color: #FFF;
    font-size: 1.2rem;
    font-weight: 700;
    flex: 1;
    border: none;
    &:hover{
        opacity: 0.6;
    }
`