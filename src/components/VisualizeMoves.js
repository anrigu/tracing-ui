import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { bindActionCreators } from "redux";
import BoxList from "../switchBox/BoxList";

function Visualizer({ numArray, actionList }) {
  const [valuesObj, setValuesObj] = useState({
    val1: {
      value: numArray[0],
      pos: 1,
      shiftPos: 0,
    },
    val2: {
      value: numArray[1],
      pos: 2,
      shiftPos: 0,
    },
    val3: {
      value: numArray[2],
      pos: 3,
      shiftPos: 0,
    },
    val4: {
      value: numArray[3],
      pos: 4,
      shiftPos: 0,
    },
    val5: {
      value: numArray[4],
      pos: 5,
      shiftPos: 0,
    },
    val6: {
      value: numArray[5],
      pos: 6,
      shiftPos: 0,
    },
    val7: {
      value: numArray[6],
      pos: 7,
      shiftPos: 0,
    },
    val8: {
      value: numArray[7],
      pos: 8,
      shiftPos: 0,
    },
    val9: {
      value: numArray[8],
      pos: 9,
      shiftPos: 0,
    },
    val10: {
      value: numArray[9],
      pos: 10,
      shiftPos: 0,
    },
  });
//   console.log("actionListLIst", actionList);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [actionStep, setActionStep] = useState(0);
  const [text, setText] = useState('Next');
  return (
    // console.log(actionList),
    // console.log("first", valuesObj),
    (
      <div>
        <div>
          <Button
            onClick={() => {
              const step = actionList[actionStep].action;
              setIndex1(actionList[actionStep].index[0] + 1);
              setIndex2(actionList[actionStep].index[1] + 1);
              if (step === "Swap") {
                // console.log("jhgfs", index1);
                // console.log("zxcv", index2);
                let i;
                let shift = index2 - index1;
                let newValuesObj = { ...valuesObj };
                let key;
                let key2;
                let firstShift;
                let secondShift;
                for (i = 1; i <= Object.keys(valuesObj).length; i++) {
                //   console.log(i);
                  let referenceVar = newValuesObj[`val${i}`];
                  if (`val${referenceVar.pos}` === `val${index1}`) {
                    referenceVar.shiftPos += shift;
                    key = `val${i}`;
                    firstShift = referenceVar.pos + shift;
                    // console.log("firstshift", firstShift);
                  }
                  if (`val${referenceVar.pos}` === `val${index2}`) {
                    referenceVar.shiftPos -= shift;
                    key2 = `val${i}`;
                    secondShift = referenceVar.pos - shift;
                    // console.log("second", secondShift);
                  }
                }
                newValuesObj[key].pos = firstShift;
                newValuesObj[key2].pos = secondShift;
                // console.log("sakdnsa", newValuesObj[key]);
                // console.log("sasdasdasdasdakdnsa", newValuesObj[key2]);
                // console.log("grefd", newValuesObj);

                setValuesObj(newValuesObj);
              }
            //   console.log("actioStep", actionStep);
              if (actionStep !== actionList.length - 1) {
                setActionStep(actionStep + 1);
              }
              else {
                  return (
                      setText('Done')
                  )
              }
            }}
            variant="outlined"
            style={{ margin: "5px" }}
          >
            {text}
          </Button>
          {/* {console.log("actionList", actionList)} */}
          <BoxList
            action={actionList.length !== 0 ? actionList[actionStep] : null}
            valuesObj={valuesObj}
          />
        </div>
      </div>
    )
  );
}

export default connect(
  (state) => ({
    numArray: state.ui.numArray,
    actionList: state.ui.actionList,
  }),
  null
)(Visualizer);
