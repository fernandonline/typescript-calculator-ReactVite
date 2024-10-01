import styled from "styled-components";
import Header from "./components/header";
import Input from "./components/input";
import DisplayButtons from "./components/displayButtons";
import UseCalculator from "./components/useCalculator";

export default function App() {
  
  const {currentValue, addValue, delValue } = UseCalculator()

  return (
    <Container>
      <Header />
      <Input value={currentValue} />
      <DisplayButtons 
        addValue={addValue} 
        delValue={delValue}
      />
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
