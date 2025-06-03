import { useState } from "react";

const App=()=>{
const [color,setColor]= useState("blue");
return(
<>
<h2>Welcome to world</h2>
<button onClick={()=>{setColor("yellow")}}>yellow</button>
<button onClick={()=>{setColor("blue")}}>blue</button>
<button onClick={()=>{setColor("green")}}>green </button>
<h3 style={{color:color}}>my favourite colour :{color}</h3>
</>
)

}
export default App;