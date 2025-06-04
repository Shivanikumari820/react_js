import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(0);


  useEffect(() => {                  
      setMulti(count * 2);              {/* ye useEffect dependency change hone pr chlegi 3rd type of useEffect h ye  */}
  },[count]);                           {/* useEffect's second argument ([count]) is called the dependency array. It tells React: "Only run this effect when count changes." */}

  return (
    <>
      <h1>Welcome to my App</h1>    
      <button onClick={() => {setCount(count+1)}}>Click here</button>
    <h3>count is:   {count}</h3>
    <h4>Multiplication : {multi}</h4>
    </>
  );
};

export default App;

/*
This useEffect is the 3rd type (runs only when count changes):

Every time the value of count changes, this code inside useEffect runs.

It updates multi to be count * 2. */