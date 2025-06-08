import { useState, useEffect } from "react";
import axios from "axios";

const Update = () => {
    const [mydata, setMydata] = useState([]);
    const [editData, setEditData] = useState(null); // ✅ added for editing

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/employee");
            setMydata(response.data);
        } catch (error) {
            console.error("Error loading data", error);
        }
    };

    const recDelete = async (id) => {
        let confirmDelete = window.confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/employee/${id}`);
                alert("Record deleted successfully");
                loadData(); // refresh data
            } catch (error) {
                console.error("Error deleting record", error);
                alert("Failed to delete record");
            }
        }
    };

    // ✅ handle edit button click
    const handleEditClick = (item) => {
        setEditData({ ...item });
    };

    // ✅ handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // ✅ handle update button
    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3000/employee/${editData.id}`, editData);
            alert("Record updated successfully");
            setEditData(null); // clear form
            loadData(); // refresh table
        } catch (error) {
            console.error("Error updating record", error);
            alert("Failed to update record");
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <h2>Welcome to update page</h2>

            {/* ✅ Edit form section */}
            {editData && (
                <div style={{ marginBottom: "20px" }}>
                    <h3>Edit Employee</h3>
                    <input
                        type="text"
                        name="empno"
                        value={editData.empno}
                        onChange={handleChange}
                        placeholder="Emp No"
                    />
                    <input
                        type="text"
                        name="name"
                        value={editData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="designation"
                        value={editData.designation}
                        onChange={handleChange}
                        placeholder="Designation"
                    />
                    <input
                        type="text"
                        name="city"
                        value={editData.city}
                        onChange={handleChange}
                        placeholder="City"
                    />
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={() => setEditData(null)}>Cancel</button>
                </div>
            )}

            {/* ✅ Data Table */}
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Emp No</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.map((item, index) => (
                        <tr key={index}>
                            <td>{item.empno}</td>
                            <td>{item.name}</td>
                            <td>{item.designation}</td>
                            <td>{item.city}</td>
                            <td>
                                <button onClick={() => handleEditClick(item)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => recDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Update;
