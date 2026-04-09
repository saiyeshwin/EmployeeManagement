import React, { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import StatsPanel from "../StatsPanel";
import { getAllEmployees } from "../../js/employeeService";
import { getAllDepartments } from "../../js/departmentService";
import { getAllLocations } from "../../js/locationService";


const Employee = () => {

    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [locCount, setLocCount] = useState(null);
    const [selected, setSelected] = useState(null);

    const load = () => {
        getAllEmployees().then(data => setEmployees(data));
        getAllDepartments().then(data => setDepartments(data));
        getAllLocations().then(data => setLocCount(data.length));
    };

    useEffect(() => { load(); }, []);

    return (
        <div className="page-layout">
            <div className="page-top">
                <StatsPanel
                    employees={employees.length}
                    departments={departments.length}
                    locations={locCount}
                    active="Employee"
                />
                <EmployeeForm
                    refresh={load}
                    selected={selected}
                    setSelected={setSelected}
                    departments={departments}
                />
            </div>

            <EmployeeList employees={employees} refresh={load} onEdit={setSelected} />
        </div>
    );
};

export default Employee;