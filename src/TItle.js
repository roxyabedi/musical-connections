import React from "react";


function Header() {
    const date = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
        <div class = "title">
        <h1>Musical Connections</h1>
        <p>{formattedDate}</p>
        <h2>Create four groups of four!</h2>
        </div>
    )
}

export default Header