import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import BoxList from "../switchBox/BoxList";
import useInterval from "./useInterval";

const posShift = (delta, index, shift, value) => {
  value.shiftPos += delta;
  shift.key = index;
  shift.shift = value.pos + delta;
};

function Visualizer({ numArray, actionList, timeout }) {
  const [values, setValues] = useState(
    numArray.map((val, index) => ({
      value: val,
      pos: index + 1,
      shiftPos: 0,
    }))
  );
  const [autoplay, setAutoplay] = useState(false);

  const [actionStep, setActionStep] = useState(-1);
  const [text, setText] = useState("Next");
  const [autoPlayText, setAutoplayText] = useState("Start autoplay");
  const [done, setDone] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setValues(
      numArray.map((val, index) => ({
        value: val,
        pos: index + 1,
        shiftPos: 0,
      }))
    );
    setActionStep(-1);
    setDone(false);
    setText("Next");
  }, [numArray, reset]);

  const handleChange = () => {
    console.log("handle", actionStep);
    let nextAction;
    let index1 = 0;
    let index2 = 0;
    if (actionStep >= actionList.length - 1) {
      setDone(true);
      setActionStep(-1);
      return setText("Done");
    } else {
      if (!done) {
        nextAction = actionStep + 1;

        const step = actionList[nextAction].action;
        index1 = actionList[nextAction].index[0] + 1;
        index2 = actionList[nextAction].index[1] + 1;
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
        console.log("nextaction", nextAction);
        setActionStep(nextAction);
      }
    }
  };

  useEffect(() => {
    if (autoplay) {
      setTimeout(handleChange, 1000);
    }
  }, [autoplay, actionStep]);

  return (
    <div>
      <div>
        <Button
          onClick={handleChange}
          disabled={autoplay || done ? true : false}
          variant="outlined"
          style={{ margin: "5px" }}
        >
          {text}
        </Button>
        <Button
          onClick={() => {
            setAutoplay(!autoplay);
            setAutoplayText(autoplay ? "Start Autoplay" : "Stop Autoplay");
          }}
          variant="outlined"
          disabled={done ? true : false}
        >
          {autoPlayText}
        </Button>
        <Button
          onClick={() => {
            setReset(!reset);
          }}
          variant="outlined"
        >
          Reset
        </Button>
        <BoxList
          action={
            actionList.length !== 0 || actionStep !== -1
              ? actionList[actionStep]
              : null
          }
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
