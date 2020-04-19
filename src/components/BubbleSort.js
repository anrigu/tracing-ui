import React, { useState } from "react";
import { Button, Typography, Grid, TextField } from "@material-ui/core";
import TextInfo from "./TextInfo";
import ui, { getActionList, getData } from "../redux/ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Visualizer from "./VisualizeMoves";

const description = {
  name: "Bubble Sort",
  description:
    "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",
};

function BubbleSort(props) {
  const [buttonClick, setButtonClick] = useState(0);
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ width: "100%", height: "100vh" }}
    >
      <Typography variant="h3">Visualize the bubble sort</Typography>
      <Grid item>
        <TextField variant='outlined' placeholder='Number of numbers' onChange={(e)=> props.setNumNums(e.target.value)}>
        </TextField>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => {
            props.getData();
          }}
        >
          Generate random array
        </Button>
        <Grid item>
          <Visualizer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default connect(
  (state) => ({
    actionList: state.ui.actionList,
    numArray: state.ui.numArray,
    numNums: state.ui.numNums,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        getData: getData,
        setNumNums: ui.actions.setNumNums,
      },
      dispatch
    )
)(BubbleSort);
