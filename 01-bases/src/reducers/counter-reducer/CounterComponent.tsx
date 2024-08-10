import { useReducer } from "react";
import { CounterState } from "./interfaces";
import { counterReducer } from './counterReducer';


const INITIAL_STATE:CounterState = {
    counter: 0,
    previous:0,
    changes:0
}
export function CounterComponent() {
    
    const [state,dispatch] = useReducer(counterReducer,INITIAL_STATE)

    const handleReset = () => {
        dispatch({type: 'reset'});
    }

    const increaseBy = (value:number) => {
        dispatch({type: 'increaseBy', payload: {value:value}});
    }
    return (
        <>
         <h1>Counter Component: </h1>
         <h4>Counter: {state.counter}</h4>
         <h4>Previous: {state.previous}</h4>
         <h4>Changes: {state.changes}</h4>
         <button onClick={ () => increaseBy(1)}>
           +1
         </button>
         <button onClick={ () => increaseBy(5)}>
           +5
         </button>
         <button onClick={ () => increaseBy(10)}>
           +10
         </button>

         <button onClick={ () => handleReset()}>
           Reset
         </button>
        </>
    )
}