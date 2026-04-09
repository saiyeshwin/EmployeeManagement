import React, { useEffect, useState } from "react";
import DepartmentForm from "./DepartmentForm";
import DepartmentList from "./DepartmentList";
import StatsPanel from "../StatsPanel";
import { getAllDepartments } from "../../js/departmentService";
import { getAllEmployees } from "../../js/employeeService";
import { getAllLocations } from "../../js/locationService";


const Department = () => {

    const [departments, setDepartments] = useState([]);
    const [selectedDept, setSelectedDept] = useState(null);
    const [empCount, setEmpCount] = useState(null);
    const [locCount, setLocCount] = useState(null);

    const loadDepartments = () => {
        getAllDepartments().then(data => setDepartments(data));
        getAllEmployees().then(data => setEmpCount(data.length));
        getAllLocations().then(data => setLocCount(data.length));
    };

    useEffect(() => { loadDepartments(); }, []);

    return (
        <div className="page-layout">
            <div className="page-top">
                <StatsPanel
                    employees={empCount}
                    departments={departments.length}
                    locations={locCount}
                    active="Department"
                />
                <DepartmentForm
                    refresh={loadDepartments}
                    selectedDept={selectedDept}
                    setSelectedDept={setSelectedDept}
                />
            </div>

            <DepartmentList
                departments={departments}
                refresh={loadDepartments}
                onEdit={setSelectedDept}
            />
        </div>
    );
};

export default Department;