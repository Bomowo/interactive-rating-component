import { Fab } from "@mui/material";
import React, { useState } from "react";

function Rating() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <Fab onClick={() => setCount(1)}>1</Fab>
            <Fab onClick={() => setCount(2)}>2</Fab>
            <Fab onClick={() => setCount(3)}>3</Fab>
            <Fab onClick={() => setCount(4)}>4</Fab>
            <Fab onClick={() => setCount(5)}>5</Fab>
        </div>
    );
}

export default Rating;