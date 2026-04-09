import React, { useState } from 'react'
import Employee from './Employee/Employee'
import Location from './Location/Location'
import Department from './Department/Department'

const NavBar = () => {
    const [active, setActive] = useState('Employee')

    const display = () => {
        switch (active) {
            case 'Employee': return <Employee />
            case 'Department': return <Department />
            case 'Location': return <Location />
            default: return <h3>Error</h3>
        }
    }

    return (
        <>
            <div className="navbar">
                <h2 className="logo">EMS</h2>

                <div className="nav-buttons">
                    <button onClick={() => setActive('Employee')}>Employee</button>
                    <button onClick={() => setActive('Department')}>Department</button>
                    <button onClick={() => setActive('Location')}>Location</button>
                </div>
            </div>

            <div>{display()}</div>
        </>
    )
}

export default NavBar