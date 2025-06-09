import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [eno, setEno] = useState('');
  const [editData, setEditData] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/employee?empno=${eno}`);
      if (response.data.length > 0) {
        setEditData(response.data[0]); // assuming empno is unique
      } else {
        alert('No employee found with that Empno');
        setEditData(null);
      }
    } catch (error) {
      console.error('Error fetching employee data', error);
      alert('Failed to search for employee');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/employee/${editData.id}`, editData);
      alert('Record updated successfully');
      setEditData(null);
      setEno('');
    } catch (error) {
      console.error('Error updating record', error);
      alert('Failed to update record');
    }
  };

  return (
    <div>
      <h1>Search Employee</h1>

      <label>
        Enter Empno:&nbsp;
        <input
          type="text"
          value={eno}
          onChange={(e) => setEno(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>

      {editData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Edit Employee</h3>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Empno</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{editData.id}</td>
                <td>
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editData.empno}
                    onChange={(e) => setEditData({ ...editData, empno: e.target.value })}
                  />
                </td>
                <td>
                  <button onClick={handleUpdate}>Update</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Search;
