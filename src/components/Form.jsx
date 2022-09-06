import { useState } from "react"
import { Calc } from "./Calc";

export const Form = ( ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = e => {
        e.preventDefault();
        setInputValue(e.target.value)
    }

    return (    
        <>
            <form onSubmit={onsubmit} >
                <input 
                    id="inputN"
                    type="number"
                    placeholder="Ingresa un valor para 'n'"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>

            <Calc nValue={inputValue} />
        </>
    )
}
