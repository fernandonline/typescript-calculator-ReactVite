import { useState } from "react";

const UseCalculator = () => {

    const [currentValue, setCurrentValue] = useState('')

    const addValue = (number: string) =>{
        setCurrentValue(prev => (prev === '' ? number: prev + number))
    }

    const delValue = () => {
        setCurrentValue(prev => (prev.length > 1 ? prev.slice(0, -1) : ''));
    }

    return { currentValue, addValue, delValue };

}

export default UseCalculator