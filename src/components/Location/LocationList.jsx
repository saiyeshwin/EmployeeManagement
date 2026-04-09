import React from "react";
import { deleteLocation } from "../../js/locationService";

const LocationList = ({ locations, refresh, onEdit }) => {

    const handleDelete = async (id) => {
        await deleteLocation(id);
        refresh();
    };

    return (
        <div className="grid">
            {locations.map(loc => (
                <div className="card" key={loc.locationId}>

                    <div className="card-title">{loc.city}</div>

                    <div className="card-content">
                        <p>{loc.state}</p>
                        <p>{loc.country}</p>
                    </div>

                    <div className="card-actions">
                        <button className="btn edit" onClick={() => onEdit(loc)}>Edit</button>
                        <button className="btn delete" onClick={() => handleDelete(loc.locationId)}>Delete</button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default LocationList;