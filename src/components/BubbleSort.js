import React, { useState } from "react";
import { Button, Typography, Grid } from "@material-ui/core";
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
    (
      <Grid container direction="column">
        <Typography variant="h3">Visualize the bubble sort</Typography>
        <Grid item>
          <Button
            onClick={() => {
              props.getData();
              console.log(props.actionList);
              console.log(props.numArray);
            //   console.log('numarray',props.numArray)
            }}
          >
            Generate random array
          </Button>
          {props.numArray.length !== 0 ? <Visualizer /> : null}
        </Grid>
      </Grid>
    )
  );
}

export default connect(
  (state) => ({
    actionList: state.ui.actionList,
    numArray: state.ui.numArray,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        getData: getData,
      },
      dispatch
    )
)(BubbleSort);
