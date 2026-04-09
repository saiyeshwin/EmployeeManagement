
const URL = "http://localhost:8080/locations";

export const getAllLocations = async () => {
    const res = await fetch(URL);
    return res.json();
};

export const createLocation = async (loc) => {
    const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loc)
    });
    return res.json();
};

export const updateLocation = async (id, loc) => {
    const res = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loc)
    });
    return res.json();
};

export const deleteLocation = async (id) => {
    await fetch(`${URL}/${id}`, { method: "DELETE" });
};