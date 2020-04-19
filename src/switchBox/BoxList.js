import React, { useState } from "react";
import Box from "./Box";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

function checkColour( action, value ) {
  if (!action) {
    return false;
  }

  if (action.action === "Compare") {
    return (
      action.index[0] + 1 === value.pos ||
      action.index[1] + 1 === value.pos
    );
  }
  return false;
}

export default function BoxList({ action, values }) {
  // console.log("action", action);
  if (action === null) {
    return null;
  } else {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row", width: "80%" }}>
          {values.map((value, index) => {
            return (
              <Box
                key={index}
                value={value.value}
                translate={value.shiftPos}
                transTime= {0.5}
                color={checkColour(action, value)}
              ></Box>
            );
          })}
        </div>
      </div>
    );
  }
}
