import styled from "styled-components"

export default function Input ({value}: { value: string }) {
    return (
        <InputContainer>
           <input disabled value={value} placeholder="0"/>
        </InputContainer>
      )
}

const InputContainer = styled.div`
    width: 100%;
    height: 15svh;
    display: flex;
    background: var(--screen-background);
    font-family: var(--fonte-padrao);
    margin-bottom: 30px;

    input {
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        background-color: var(--screen-backgrouond);
        border: 0;
        font-size: 2.3rem;
        font-family: var(--fonte-padrao);
        color: var(--white-text);
        display: flex;
        text-align: end;
    }
`