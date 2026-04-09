import React, { useEffect, useState } from "react";
import LocationForm from "./LocationForm";
import LocationList from "./LocationList";
import StatsPanel from "../StatsPanel";
import { getAllLocations } from "../../js/locationService";
import { getAllEmployees } from "../../js/employeeService";
import { getAllDepartments } from "../../js/departmentService";


const Location = () => {

    const [locations, setLocations] = useState([]);
    const [selected, setSelected] = useState(null);
    const [empCount, setEmpCount] = useState(null);
    const [deptCount, setDeptCount] = useState(null);

    const load = () => {
        getAllLocations().then(data => setLocations(data));
        getAllEmployees().then(data => setEmpCount(data.length));
        getAllDepartments().then(data => setDeptCount(data.length));
    };

    useEffect(() => { load(); }, []);

    return (
        <div className="page-layout">
            <div className="page-top">
                <StatsPanel
                    employees={empCount}
                    departments={deptCount}
                    locations={locations.length}
                    active="Location"
                />
                <LocationForm refresh={load} selected={selected} setSelected={setSelected} />
            </div>

            <LocationList locations={locations} refresh={load} onEdit={setSelected} />
        </div>
    );
};

export default Location;