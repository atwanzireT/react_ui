import React, { useState, useEffect } from "react";

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0)

    // Similar to ComponentDidMount and CompoundDidUpdate

    useEffect(() => {
        // Update the document title using browser API
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click Me</button>
        </div>
    )
}

export default Example