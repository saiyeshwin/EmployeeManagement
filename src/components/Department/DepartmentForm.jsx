import React, { useState, useEffect } from "react";
import { createDepartment, updateDepartment } from "../../js/departmentService";
import { getAllLocations } from "../../js/locationService";

const DepartmentForm = ({ refresh, selectedDept, setSelectedDept }) => {

    const [dept, setDept] = useState({
        deptName: "",
        budget: "",
        locationId: ""
    });

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getAllLocations().then(setLocations);
    }, []);

    useEffect(() => {
        if (selectedDept) {
            setDept(selectedDept);
        }
    }, [selectedDept]);

    const handleChange = (e) => {
        setDept({ ...dept, [e.target.name]: e.target.value });
    };

    const saveDept = async (e) => {
        e.preventDefault();

        if (!dept.deptName || !dept.budget || !dept.locationId) {
            alert("Fill all fields");
            return;
        }

        const payload = {
            deptName: dept.deptName,
            budget: Number(dept.budget),
            locationId: Number(dept.locationId)
        };

        if (selectedDept) {
            await updateDepartment(selectedDept.deptId, payload);
        } else {
            await createDepartment(payload);
        }

        refresh();
        setSelectedDept(null);
        setDept({ deptName: "", budget: "", locationId: "" });
    };

    return (
        <div className="form-wrapper">
            <form className="form-box" onSubmit={saveDept}>
                <h2>{selectedDept ? "Edit Department" : "Add Department"}</h2>

                <input name="deptName" placeholder="Department Name"
                    value={dept.deptName} onChange={handleChange} />

                <input type="number" name="budget" placeholder="Budget"
                    value={dept.budget} onChange={handleChange} />

                <select name="locationId" value={dept.locationId} onChange={handleChange}>
                    <option value="">Select Location</option>
                    {locations.map(l => (
                        <option key={l.locationId} value={l.locationId}>
                            {l.city}
                        </option>
                    ))}
                </select>

                <button className="btn primary">
                    {selectedDept ? "Update" : "Save"}
                </button>

                {selectedDept && (
                    <button className="btn secondary" type="button"
                        onClick={() => setSelectedDept(null)}>
                        Cancel
                    </button>
                )}
            </form>
        </div>
    );
};

export default DepartmentForm;