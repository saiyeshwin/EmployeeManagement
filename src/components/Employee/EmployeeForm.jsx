import React, { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../../js/employeeService";

const EmployeeForm = ({ refresh, selected, setSelected, departments }) => {

    const [emp, setEmp] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        salary: "",
        deptId: ""
    });

    useEffect(() => {
        if (selected) setEmp(selected);
    }, [selected]);

    const handleChange = (e) => {
        setEmp({ ...emp, [e.target.name]: e.target.value });
    };

    const save = async (e) => {
        e.preventDefault();

        const payload = {
            name: emp.name,
            email: emp.email,
            phoneNumber: Number(emp.phoneNumber),
            salary: Number(emp.salary),
            deptId: Number(emp.deptId)
        };

        if (selected) {
            await updateEmployee(selected.employeeId, payload);
        } else {
            await createEmployee(payload);
        }

        refresh();
        setSelected(null);
        setEmp({ name: "", email: "", phoneNumber: "", salary: "", deptId: "" });
    };

    return (
        <form className="form-box" onSubmit={save}>
            <h2>{selected ? "Edit Employee" : "Add Employee"}</h2>

            <input name="name" placeholder="Name" value={emp.name} onChange={handleChange} />
            <input name="email" placeholder="Email" value={emp.email} onChange={handleChange} />
            <input name="phoneNumber" placeholder="Phone" value={emp.phoneNumber} onChange={handleChange} />
            <input type="number" name="salary" placeholder="Salary" value={emp.salary} onChange={handleChange} />

            <select name="deptId" value={emp.deptId} onChange={handleChange}>
                <option value="">Select Department</option>
                {departments.map(d => (
                    <option key={d.deptId} value={d.deptId}>
                        {d.deptName}
                    </option>
                ))}
            </select>

            <button className="btn primary">
                {selected ? "Update" : "Save"}
            </button>

            {selected && (
                <button className="btn secondary" type="button"
                    onClick={() => setSelected(null)}>
                    Cancel
                </button>
            )}
        </form>
    );
};

export default EmployeeForm;