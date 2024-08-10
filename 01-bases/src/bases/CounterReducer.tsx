import { useReducer } from "react";

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE:CounterState = {
    counter: 0,
    previous:0,
    changes:0
}

type CounterAction = {type: 'increaseBy', payload: {value:number}} | {type: 'reset'}

const counterReducer = (state:CounterState, action:CounterAction):CounterState  => {
    switch (action.type) {
        case "increaseBy":
            return {
                previous: state.counter,
                counter: state.counter + action.payload.value,
                changes: state.changes +1,
            }
        case "reset":
            return {
                counter: 0,
                previous:0,
                changes:0
            }
        default:
            return state;
    }
}

export function CounterReducer() {
    
    const [state,dispatch] = useReducer(counterReducer,INITIAL_STATE)

    const handleReset = () => {
        dispatch({type: 'reset'});
    }

    const increaseBy = (value:number) => {
        dispatch({type: 'increaseBy', payload: {value:value}});
    }
    return (
        <>
         <h1>Counter Reducer: </h1>
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