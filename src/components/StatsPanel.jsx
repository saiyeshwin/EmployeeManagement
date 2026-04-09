import React from "react";

const StatsPanel = ({ employees, departments, locations, active }) => {
    const stats = [
        {
            label: "Employees",
            count: employees,
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            ),
            key: "Employee"
        },
        {
            label: "Departments",
            count: departments,
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    <line x1="12" y1="12" x2="12" y2="16"/>
                    <line x1="10" y1="14" x2="14" y2="14"/>
                </svg>
            ),
            key: "Department"
        },
        {
            label: "Locations",
            count: locations,
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
            ),
            key: "Location"
        }
    ];

    return (
        <div className="stats-panel">
            <div className="stats-panel__title">Overview</div>
            <div className="stats-panel__cards">
                {stats.map(stat => (
                    <div
                        className={`stat-card ${active === stat.key ? "stat-card--active" : ""}`}
                        key={stat.key}
                    >
                        <div className="stat-card__icon">{stat.icon}</div>
                        <div className="stat-card__info">
                            <div className="stat-card__count">
                                {stat.count ?? "—"}
                            </div>
                            <div className="stat-card__label">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsPanel;