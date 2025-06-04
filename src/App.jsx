import { useState } from "react";

const App = () => {
  // ek hi usestate bnakr sbka kaam hojaye sbke liye alg alg na bnana pde , ek hi input sbke liye kaam
  const [formData, setFormData] = useState({rollno: "", name: "", city: "", fees: ""  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    let name = e.target.name;          {/* name me city, ya rollno. aesa uska title */}
    let value = e.target.value;        {/* value me Delhi, ya 121 aesa uski value aaye */}
    setFormData((prevData) => ({
      ...prevData,
      [name]: value             {/* [name] means key */}
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
