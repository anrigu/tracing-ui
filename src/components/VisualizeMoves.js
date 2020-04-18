import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import BoxList from "../switchBox/BoxList";

const posShift = (delta, index, shift, value) => {
  value.shiftPos += delta;
  shift.key = index;
  shift.shift = value.pos + delta;
};

function Visualizer({ numArray, actionList }) {
  const [values, setValues] = useState(
    numArray.map((val, index) => ({
      value: val,
      pos: index + 1,
      shiftPos: 0,
    }))
  );

  useEffect(() => {
    setValues(
      numArray.map((val, index) => ({
        value: val,
        pos: index + 1,
        shiftPos: 0,
      }))
    );
  }, [numArray]);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [actionStep, setActionStep] = useState(0);
  const [text, setText] = useState("Next");

  const handleChange = () => {
    const step = actionList[actionStep].action;
    setIndex1(actionList[actionStep].index[0] + 1);
    setIndex2(actionList[actionStep].index[1] + 1);
    if (step === "Swap") {
      let delta = index2 - index1;
      let newValues = [...values];
      let shifts = [
        { key: 0, shift: 0 },
        { key: 0, shift: 0 },
      ];
      values.forEach((value, index) => {
        if (value.pos === index1) {
          posShift(delta, index, shifts[0], value);
        } else if (value.pos === index2) {
          posShift(-delta, index, shifts[1], value);
        }
      });

      newValues[shifts[0].key].pos = shifts[0].shift;
      newValues[shifts[1].key].pos = shifts[1].shift;

      setValues(newValues);
    }
    if (actionStep !== actionList.length - 1) {
      setActionStep(actionStep + 1);
    } else {
      return setText("Done");
    }
  };

  return (
    <div>
      <div>
        <Button
          onClick={handleChange}
          variant="outlined"
          style={{ margin: "5px" }}
        >
          {text}
        </Button>
        <BoxList
          action={actionList.length !== 0 ? actionList[actionStep] : null}
          values={values}
        />
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    numArray: state.ui.numArray,
    actionList: state.ui.actionList,
  }),
  null
)(Visualizer);
