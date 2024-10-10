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
    height: 12vh;
    background: var(--screen-background);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-family: 'Roboto';
    border-top-right-radius: 26px;
    border-top-left-radius: 26px;

    input {
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        background-color: var(--screen-backgrouond);
        border: 0;
        font-size: 2rem;
        font-family: 'Roboto';
        color: #fff;
    }
`