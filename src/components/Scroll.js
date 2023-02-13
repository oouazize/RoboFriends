import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', height:'76em'}}>
            {props.children}
        </div>
    );
}

export default Scroll