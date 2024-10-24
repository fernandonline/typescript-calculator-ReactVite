import styled from "styled-components"

export default function Input ({value}: { value: string }) {
    return (
        <InputContainer>
           <input disabled value={value}/>
        </InputContainer>
      )
}

const InputContainer = styled.div`
    width: 100%;
    height: 14svh;
    background: var(--screen-background);
    display: flex;

    font-size: 2rem;
    font-family: var(--fonte-padrao);
    border-radius: 16px;
    margin-bottom: 5px;

    input {
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        background-color: var(--screen-backgrouond);
        border: 0;
        font-size: 2rem;
        font-family: var(--fonte-padrao);
        color: var(--white-text);
        display: flex;
        text-align: end;
    }
`