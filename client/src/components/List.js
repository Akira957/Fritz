import React from "react";

export function List({ children }) {
    return (
        <div className="list">
            <ul className="list-category">{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <li className="list-category-item">{children}</li>
}