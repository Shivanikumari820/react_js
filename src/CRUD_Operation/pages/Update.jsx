import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    const api = "http://localhost:3000/employee";
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

  const recDelete = async (id) => {
    const api = `http://localhost:3000/employee/${id}`;
    try {
      await axios.delete(api);
      alert("Data successfully deleted!");
      loadData();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Delete failed");
    }
  };

  const recEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <h3>Our data</h3>
      <hr />
      <table border="1" width="600px">
        <thead>
          <tr>
            <th>Sno</th><th>Name</th><th>Empno</th>
            <th>Designation</th><th>Salary</th><th>Edit</th><th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((item, idx) => (
            <tr key={item.id}>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.empno}</td>
              <td>{item.designation}</td>
              <td>{item.city}</td>
              <td><button onClick={() => recEdit(item.id)}>Edit</button></td>
              <td><button onClick={() => recDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Update;
