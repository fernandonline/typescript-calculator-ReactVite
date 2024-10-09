import styled from "styled-components";
import Header from "./components/header";
import Input from "./components/input";
import Button from "./components/button";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function App() {

  const [expression, setExpression] = useState<string[]>([])

  const addValue = (number: string) => {
    setExpression(prev => {
      if (prev.length === 0 || isOperator(prev[prev.length - 1])) {
        return [...prev, number]
      } else {
        const newPrev = [...prev]
        newPrev[newPrev.length - 1] += number
        return newPrev
      }
    })
  }
  
  const handleOperator = (op: string) => {
    setExpression(prev => {
      if (prev.length === 0) return prev
      if (isOperator(prev[prev.length - 1])) {
        const newPrev = [...prev]
        newPrev[newPrev.length - 1] = op
        return newPrev
      }
      return [...prev, op]
    })
  }
  
  const isOperator = (char: string) => ['+', '-', 'x', '/'].includes(char)
  
  const delValue = () => {
    setExpression(prev => {
      const newPrev = [...prev]
      if (newPrev.length > 0) {
        const lastItem = newPrev[newPrev.length - 1]
        if (lastItem.length > 1) {
          newPrev[newPrev.length - 1] = lastItem.slice(0, -1)
        } else {
          newPrev.pop()
        }
      }
      return newPrev
    })
  }
  
  const resetValue = () => {
    setExpression([])
  }
  
  const calculate = () => {

    if (expression.length === 0) return
    else
    {
 
      const expressionString = expression.join('').replace(/x/g, '*').replace(/,/g, '.')
      const result = evaluate(expressionString)
      setExpression([result.toString()])
    }
  }

  return (
    <Container>
      <Header />
      <Input value={expression.join('')}/>

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
        <Button label=',' onClick={() => addValue(',')}/>
        <Button label='0' onClick={() => addValue('0')}/>
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
