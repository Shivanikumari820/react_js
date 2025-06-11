import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mydata, setMydata] = useState({});

  const loadData = async () => {
    const api = `http://localhost:3000/employee/${id}`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMydata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const api = `http://localhost:3000/employee/${id}`;
    try {
      await axios.put(api, mydata);
      alert("Data successfully updated!");
      navigate("/update");
    } catch (err) {
      console.error("Error updating data:", err);
      alert("Update failed. Check console.");
    }
  };

  if (!mydata || !mydata.name) return <p>Loading...</p>;

  return (
    <div>
      <h3>Edit Employee Record</h3>
      <label>
        Name:
        <input name="name" value={mydata.name} onChange={handleInput} />
      </label><br /><br />
      <label>
        Emp No:
        <input name="empno" value={mydata.empno} onChange={handleInput} />
      </label><br /><br />
      <label>
        Designation:
        <input name="designation" value={mydata.designation} onChange={handleInput} />
      </label><br /><br />
      <label>
        City:
        <input name="city" value={mydata.city} onChange={handleInput} />
      </label><br /><br />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={() => navigate("/update")}>Cancel</button>
    </div>
  );
};

export default Edit;
