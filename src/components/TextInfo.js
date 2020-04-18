import React, { useState } from "react";
import { Button, Typography, Grid } from "@material-ui/core";

export default function TextInfo(props) {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h1">{props.name}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{props.description}</Typography>
      </Grid>
    </Grid>
  );
}
