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
    border: 1px solid #CDCDCD;
    background: var(--btn);
    color: #FFF;
    font-size: 1.2rem;
    font-weight: 700;
    flex: 1;
    &:hover{
        opacity: 0.6;
    }
`