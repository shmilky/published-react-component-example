'use strict';

import React from "react";

function SharedComponent (props) {
    const {bgColor="lightGray", color="black", content="no content" } = props;
    return (
        <div
            style = {{
                fontSize: "20px",
                textAlign: "center",
                padding: "40px",
                backgroundColor: bgColor,
                color: color
            }}
        >
            {content}
        </div>
    );
}

export default SharedComponent;