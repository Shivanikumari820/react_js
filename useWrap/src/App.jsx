// import React from 'react'
// import { useRef } from 'react'

// const App = () => {
//   const myRef = useRef();  

//   const myFun = () =>{
//     myRef.current.innerHTML = "Welcome to cybrom";  
//   }

//   return (
//    <>
//       <h1 ref={myRef}>Welcome to my App</h1>
//       <button onClick={myFun}> Click here </button>
//    </>
//   )
// }

// export default App



//2nd task .. jese hi button pr click kre jisko reference diya h usme style ho jaye 
// import React from 'react'
// import { useRef } from 'react'


//   const App = () => {
//   const myRef = useRef();  

//   const myFun = () =>{
//     myRef.current.style.width = "300px"; 
//     myRef.current.style.padding = "20px";  
//     myRef.current.style.backgroundColor = "pink";  
//     myRef.current.style.borderRadius = "pink";  

//   }

//   return (<>
//     <button onClick={myFun}>Click here!</button>
//     <div ref = {myRef}>Hello , we are react developer</div>

//     </>
//   )
// }

// export default App

//3rd task  - easch render pr chle number increment ho

// import React, { use, useEffect, useState } from 'react'
// import { useRef } from 'react'

// const App = () => {
//   const myRef = useRef(0); 
//   const [val, setVal] = useState("");

//   useEffect (() => {
//     myRef.current++;
//   })



//   return (
//     <>
//  <input type="text"  value = {val} onChange={(e) => {setVal (e.target.value)}}/>
//       <h1 > My render count : {myRef.current}</h1>
   
//     </>
//   );
// };

// export default App;


// 4th task ---->
import React from 'react'
import { useRef } from 'react'

const App = () => {
  const myRef = useRef();

  const myFun1 = () => {
    myRef.current.style.border = "2px solid red"; 
  }

  const myFun2 = () => {
    myRef.current.style.backgroundColor = "Yellow";
  }

  const myFun3 = () => {
    myRef.current.style.textTransform = "uppercase"; 
    myRef.current.innerHTML = "Welcome to cybrom"; 
    myRef.current.style.color = "red"; 
  }

  return (
    <>
      <h1 ref={myRef}>Welcome to india</h1>
      <button onClick={myFun1}>Click</button>
      <button onClick={myFun2}>Click</button>
      <button onClick={myFun3}>Click</button>
    </>
  );
}

export default App;

