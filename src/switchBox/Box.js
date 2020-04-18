import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";

export default function Box(props) {
  return (
    <div
      style={{
        width: "10%",
        height: "100%",
        border: "1px solid #b4b4b4",
        transform: `translateX(${props.translate * 100}%)`,
        transition: '2s ease-in-out',
        background: props.color ? 'gray':'white',
      }}
    >
      <Grid container justify="center" alignItems="center">
        <Typography variant="caption">{props.value}</Typography>
      </Grid>
    </div>
  );
}
