import React from "react";
import { deleteEmployee } from "../../js/employeeService";

const EmployeeList = ({ employees, refresh, onEdit }) => {

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        refresh();
    };

    return (
        <div>
            <div className="grid">
                {employees.map(emp => (
                    <div className="card" key={emp.employeeId}>

                        <div className="card-title">{emp.name}</div>

                        <div className="card-content">
                            <p>Email: {emp.email}</p>
                            <p>Salary: {emp.salary}</p>
                            <p>Dept: {emp.deptName}</p>
                        </div>

                        <div className="card-actions">
                            <button className="btn edit" onClick={() => onEdit(emp)}>Edit</button>
                            <button className="btn delete" onClick={() => handleDelete(emp.employeeId)}>Delete</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeList;