const URL = "http://localhost:8080/employees";

export const getAllEmployees = async () => {
    const res = await fetch(URL);
    return res.json();
};

export const createEmployee = async (emp) => {
    const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp)
    });
    return res.json();
};

export const updateEmployee = async (id, emp) => {
    const res = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp)
    });
    return res.json();
};

export const deleteEmployee = async (id) => {
    await fetch(`${URL}/${id}`, { method: "DELETE" });
};