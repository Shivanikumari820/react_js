// const App = () => {
//   // function Display(){
//   //   alert("Welcome to my website")
//   // }

//   // const myname = (nm) =>{
//   //   alert("Welcome " + nm + " to my website")

//   // }

//   // const Display = (e) =>{
//   //    console.log(e.type)
//   // }

//   // const myname = (nm) =>{
//   //   alert(`MyName : ${nm} Type : ${e.type}`)

//   // }

//   //name , value , type jo lgana h event hamne vo alert msg hojaye print 
//    function Display(e){
//     let nm = e.target.name;
//     let typ = e.target.type;
//     let val = e.target.value;
//     alert(`Name : ${nm}   Type : ${typ}    Value: ${val}`)


//   }


//   return (
//    <>
//    <h1>Welcome to App</h1>

//    {/* <button onClick={Display}> Click here</button>                        callings a function in react js  */}

//     {/* <button onClick={(e) => {myname("Shivani", e)}}> Click here</button>       kisi function k andr parameter pass krna ho to usko ek arrow function bnakr pass kre h ek onClick k and direct ni krte */}

//     <button name="MyBtn1" type="Bnttyp" value="BTNVal" onClick={Display}> Click here</button>
//    </>
//   );
// };

// export default App;



//input field me jo chnage krenge vo show hoga console me just value k baad 


const App  = ()  => {

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log([name], value)

  }
  return(
    <>
             Enter city : <input type="text" name = "MyCity" value = "Bhopal" onChange={handleInput} />
    </>
  );
}

export default App;