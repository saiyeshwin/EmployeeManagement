import React, { useState, useEffect } from "react";
import { createLocation, updateLocation } from "../../js/locationService";

const LocationForm = ({ refresh, selected, setSelected }) => {

    const [loc, setLoc] = useState({
        city: "",
        state: "",
        country: ""
    });

    useEffect(() => {
        if (selected) setLoc(selected);
    }, [selected]);

    const handleChange = (e) => {
        setLoc({ ...loc, [e.target.name]: e.target.value });
    };

    const save = async (e) => {
        e.preventDefault();

        if (selected) {
            await updateLocation(selected.locationId, loc);
        } else {
            await createLocation(loc);
        }

        refresh();
        setSelected(null);
        setLoc({ city: "", state: "", country: "" });
    };

    return (
        <form className="form-box" onSubmit={save}>
    <h2>{selected ? "Edit Location" : "Add Location"}</h2>

    <div className="form-grid">

        <input 
        className="full-width"
            name="city" 
            placeholder="City" 
            value={loc.city} 
            onChange={handleChange} 
        />

        <input 
        className="full-width"
            name="state" 
            placeholder="State" 
            value={loc.state} 
            onChange={handleChange} 
        />

        <input 
            className="full-width"
            name="country" 
            placeholder="Country" 
            value={loc.country} 
            onChange={handleChange} 
        />

    </div>

    <button className="btn primary">
        {selected ? "Update" : "Save"}
    </button>

    {selected && (
        <button 
            className="btn secondary" 
            type="button"
            onClick={() => setSelected(null)}
        >
            Cancel
        </button>
    )}
</form>
    );
};

export default LocationForm;