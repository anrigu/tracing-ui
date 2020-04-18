import React from "react";
import { Backdrop, CircularProgress, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Loading(props) {
  return (
    <Backdrop open={props.showSpinner}>
      <Grid container justify="center" alignItems="center">
        <CircularProgress size={60} />
      </Grid>
    </Backdrop>
  );
}

export default connect(
  (state) => ({
    showSpinner: state.ui.showSpinner,
  }),
  null
)(Loading);
