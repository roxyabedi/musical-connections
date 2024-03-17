import React from "react";

const mistakesRemaining = "⚫️ ⚫️ ⚫️ ⚫️"

function Mistakes () {
    return(
    <div className="mistakes">
        <p>Mistakes remaining: {mistakesRemaining}</p>
    </div>
    )
}

export default Mistakes;