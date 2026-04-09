import React from "react";
import { deleteDepartment } from "../../js/departmentService";

const DepartmentList = ({ departments, refresh, onEdit }) => {

    const handleDelete = async (id) => {
        await deleteDepartment(id);
        refresh();
    };

    return (
        <div>
            <div className="grid">
                {departments.map(dept => (
                    <div className="card" key={dept.deptId}>

                        <div className="card-title">{dept.deptName}</div>

                        <div className="card-content">
                            <p>Budget: {dept.budget}</p>
                            <p>Location: {dept.locationCity}</p>
                        </div>

                        <div className="card-actions">
                            <button className="btn edit" onClick={() => onEdit(dept)}>Edit</button>
                            <button className="btn delete" onClick={() => handleDelete(dept.deptId)}>Delete</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepartmentList;