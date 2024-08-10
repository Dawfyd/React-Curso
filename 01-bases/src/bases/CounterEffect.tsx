import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export function CounterEffect() {
    
    const [counter, setCounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
    }


    useEffect(() => {
        if (counter < MAXIMUN_COUNT) return;

        const tl = gsap.timeline();

        tl.to(counterElement.current,{y: -10, duration: 0.2, ease: "ease"})
          .to(counterElement.current,{y: 10, duration: 2, ease: "elastic"})

    }, [counter])
    
    return (
        <>
         <h1>CounterEffect : {counter}</h1>
         <h2 ref={counterElement}>{counter}</h2>
         <button onClick={ () => handleClick()}>
           +1
         </button>
        </>
    )
}