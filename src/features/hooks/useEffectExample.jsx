
/*
===========================================
TOPIC: useEffect Hook
===========================================

✅ Definition:
useEffect handles side effects like API calls, DOM updates, timers.

✅ Syntax:
useEffect(() => {
  // side effect
}, [dependencies]);
*/

import react from "react";
import { useEffect, useState } from "react";
 function useEffectExample(){

    const [count, setCount]= useState(0);

    useEffect(() => {

        console.log("state Mounted",)
    } , [count]);

    return(
        <div>
            <>
            <h2>count is : {count}</h2>
            <button onClick={(()=> {setCount(count+1)})}>Increment</button>
            </>
        </div>
    )
 }

 export default useEffectExample;