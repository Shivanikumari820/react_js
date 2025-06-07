import { useState, useEffect } from "react";
import axios from "axios";

const display = () => {
    const [mydata, setmydata] = useState([]);

    const loadData = async () => {
        let api = "http://localhost:3000/employee";
        const response = await axios.get(api);
        setmydata(response.data); 
        console.log(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);


    return (
        <>
            <h2>Welcome to display page</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Emp No</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.map((item, index) => (
                        <tr key={index}>
                            <td>{item.empno}</td>
                            <td>{item.name}</td>
                            <td>{item.designation}</td>
                            <td>{item.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default display;
