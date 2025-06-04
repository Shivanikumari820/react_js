import { useState, useEffect } from "react";

const App = () => {
  const [myval, setMyval] = useState(0);

  useEffect(() => {   {/* useEffect ek method h jo render hone pr chlega  */}
   setTimeout(() => {
      setMyval(myval + 1);         {/* isse ye chlta rhega isko slow krne k liye hi setTimeout use kiya */}
    }, 5000);
  });

  return (
    <>
      <h1>Welcome to my App : {myval}</h1>    
    </>
  );
};

export default App;


//useEffect ek hook h usme ek callbackfunction diya jata h as a parameter or ye chlega jitni m
/*In React, the useEffect Hook is essential for managing side effects in functional components. Side effects are operations that interact with external systems or affect components outside the scope of the current function, such as:

Fetching data from APIs

Setting up subscriptions or event listeners

Manipulating the DOM directly

Starting and clearing timers 

No dependency array: The effect runs after every render.*/