import React from "react";

function Mistakes ({mistakesRemaining}) {
    return (
    <div className="mistakes">
        <p>Mistakes remaining: {mistakesRemaining}</p>
    </div>
    )
}

export default Mistakes;