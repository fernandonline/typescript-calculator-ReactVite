
import { FC } from "react";
import Button from "./button"
import styled from "styled-components"

interface iButtonsProps {
    addValue: (value: string) => void;
    delValue: () => void;
}

const DisplayButtons: FC<iButtonsProps> = ({ addValue, delValue }) => {

    return(
        <>

        <Row>
            <Button label='7' onClick={() => addValue('7')}/>
            <Button label='8' onClick={() => addValue('8')}/>
            <Button label='9' onClick={() => addValue('9')}/>
            <Button label='DEL' onClick={delValue}/>
        </Row>

        <Row>
            <Button label='4' onClick={() => addValue('4')}/>
            <Button label='5' onClick={() => addValue('5')}/>
            <Button label='6' onClick={() => addValue('6')}/>
            <Button label='+' onClick={() => addValue('+')}/>
        </Row>

        <Row>
            <Button label='1' onClick={() => addValue('1')}/>
            <Button label='2' onClick={() => addValue('2')}/>
            <Button label='3' onClick={() => addValue('3')}/>
            <Button label='-' onClick={() => addValue('-')}/>
        </Row>

        <Row>
            <Button label='.' onClick={() => addValue(',')}/>
            <Button label='0' onClick={() => addValue('0')}/>
            <Button label='/' onClick={() => addValue('/')}/>
            <Button label='X' onClick={() => addValue('x')}/>
        </Row>

        <Row>
            <Button label='RESET' onClick={() => addValue('/')}/>
            <Button label='=' onClick={() => addValue('x')}/>
        </Row>

        </>
    )
}

export default DisplayButtons;


const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`