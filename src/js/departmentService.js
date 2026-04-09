const URL = "http://localhost:8080/departments";

export const getAllDepartments = async () => {
    const res = await fetch(URL);
    return res.json();
};

export const createDepartment = async (dept) => {
    const res = await fetch("http://localhost:8080/departments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"   // 🔥 THIS WAS MISSING
        },
        body: JSON.stringify(dept)
    });

    if (!res.ok) {
        throw new Error("Failed to create department");
    }

    return res.json();
};

export const deleteDepartment = async (id) => {
    await fetch(`${URL}/${id}`, { method: "DELETE" });
};
export const updateDepartment = async (id, dept) => {
    const res = await fetch(`http://localhost:8080/departments/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dept)
    });

    if (!res.ok) {
        throw new Error("Failed to update");
    }

    return res.json();
};