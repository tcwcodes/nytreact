import React from "react";

export const ListItem = props => (
    <div>
        <h2>
            {props.title}
        </h2>
        <li className="list-group-item">
            Publication date (if available): {props.date}
        </li>
        <li className="list-group-item">
            <a href={props.url}>Read the full article.</a>
        </li>
        <br />
    </div>
);