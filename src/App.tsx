import styled from "styled-components";
import Header from "./components/header";
import Input from "./components/input";
import Button from "./components/button";
import { useState } from "react";

export default function App() {

  const [currentValue, setCurrentValue] = useState('')
  const [previousValue, setPreviousValue] = useState('')
  const [operator, setOperator] = useState('')

  const addValue = (number: string) =>{
      setCurrentValue(prev => (prev === '' ? number: prev + number))
  }

  const delValue = () => {
      setCurrentValue(prev => (prev.length > 0 ? prev.slice(0, -1) : ''))
  }

  const resetValue = () => {
    setCurrentValue('');
    setPreviousValue('');
    setOperator('');
  }

  const handleOperator = (op: string) => {
    if (currentValue === '') return
    setPreviousValue(currentValue + '' + op)
    setCurrentValue('')
    setOperator(op)
  }
  
  const calculate = () => {
    if (previousValue === '' || currentValue === '') return
  
    let result: number
    const prev = parseFloat(previousValue)
    const curr = parseFloat(currentValue)

    switch (operator) {
      case '+':
        result = prev + curr
      break

      case '-':
        result = prev - curr
      break

      case 'x':
        result = prev * curr
      break

      case '/':
        result = prev / curr
      break

      default: return
    }

    setCurrentValue(result.toString())
    setPreviousValue('')
    setOperator('')
  }

  return (
    <Container>
      <Header />
      <Input value={previousValue + currentValue}/>

      <Row>
        <Button label='7' onClick={() => addValue('7')} />
        <Button label='8' onClick={() => addValue('8')} />
        <Button label='9' onClick={() => addValue('9')} />
        <Button label='DEL' onClick={delValue} />
      </Row>

      <Row>
        <Button label='4' onClick={() => addValue('4')} />
        <Button label='5' onClick={() => addValue('5')} />
        <Button label='6' onClick={() => addValue('6')} />
        <Button label='+' onClick={() => handleOperator('+')} />
      </Row>

      <Row>
        <Button label='1' onClick={() => addValue('1')} />
        <Button label='2' onClick={() => addValue('2')} />
        <Button label='3' onClick={() => addValue('3')} />
        <Button label='-' onClick={() => handleOperator('-')} />
      </Row>

      <Row>
        <Button label='.' onClick={() => addValue('.')} />
        <Button label='0' onClick={() => addValue('0')} />
        <Button label='/' onClick={() => handleOperator('/')} />
        <Button label='X' onClick={() => handleOperator('x')} />
      </Row>

      <Row>
        <Button label='RESET' onClick={resetValue} />
        <Button label='=' onClick={calculate} />
      </Row>

    </Container>
  )
}

const Container = styled.div`
  max-width: 500px;
  min-width: 340px;
  margin: 0 auto;
  user-select: none;
  border: 2px solid white;

  @media screen and (max-width: 450px) {
    min-width: 300px;
  }

`

const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
