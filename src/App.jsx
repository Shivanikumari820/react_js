//  FORM HANDLING in React 
 
 import { useState } from "react";

const App = () => {
  // ek hi usestate bnakr sbka kaam hojaye sbke liye alg alg na bnana pde , ek hi input sbke liye kaam
  const [formData, setFormData] = useState({rollno: "", name: "", city: "", fees: ""  });

const handleChange = (e) => {
  // const { name, value } = e.target; // shortcut way (destructuring)

  let name = e.target.name;     
  // 🟡 yaha 'name' ka matlab input ka name attribute hai
  // eg: agar input me name="city" diya ho to name = "city" aayega
  // => ye input kis field ko represent karta hai — jaise "rollno", "name", "city", "fees" etc.

  let value = e.target.value;   
  // 🟢 ye user ke input ka actual text/data hai
  // eg: agar user ne "Delhi" likha to value = "Delhi" hoga

  setFormData((prevData) => ({
    ...prevData,                  
    // 🔄 purana data as it is rakhne ke liye spread operator
    // eg: { rollno: "101", city: "Bhopal" }

    [name]: value                
    // 🟢 [name] matlab dynamic key — jisme name ki value use hogi
    // eg: agar name = "city", value = "Indore"
    // => to ye banega: { city: "Indore" }
    // final object banega: { rollno: "101", city: "Indore" }

  }));
};

  const handleSubmit = () => {
    console.log(formData);            {/* for print in console , concole me data dikhega */}
  };

  return (
    <>
      <h1>Application Form</h1>

      Enter Rollno: 
      <input type="text"  name="rollno" value={formData.rollno} onChange={handleChange}/>
      <br />

      Enter Name: 
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <br />

      Enter City: 
      <input type="text" name="city" value={formData.city} onChange={handleChange}/>
      <br />

      Enter Fees: 
      <input type="text" name="fees" value={formData.fees}   onChange={handleChange} />
      <br />

      <button onClick={handleSubmit}>Click!</button>
    </>
  );
};

export default App;
