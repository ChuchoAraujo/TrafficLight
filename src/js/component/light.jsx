import React from "react";

const Light = ({color,change,setChange} ) => {
    return (
        <div>
            <div className="lights" style={{background: color === change ? color : "gray"}}
            onClick= {()=> setChange(color)}
            ></div>
        </div>
    )
}

export default Light


