import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import ui, { thunk } from "../redux/ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function UserInput(props) {
  const [value, setValue] = useState('');
  return (
    <div>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></TextField>
      <Button onClick={props.sendInfo}>Submit Code</Button>
    </div>
  );
}

export default connect(null, (dispatch) =>
  bindActionCreators(
    {
      sendInfo: thunk,
    },
    dispatch
  )
)(UserInput);
