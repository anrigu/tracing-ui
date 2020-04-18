import React, { useState } from "react";
import apiClient from "../apis/apiClient";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import ListDisplay from "../randGenerator/ListDisplay";

/**
 * Function used to create a random number generator component
 */
export default function RandomGenerator() {
  const [randomNumLists, setRandomNumLists] = useState([new Array(1)]);
  const [listLength, setListLength] = useState(0);
  const [numLists, setNumLists] = useState(0);
  const [checked, setChecked] = useState(false);

  const getData = () => {
    apiClient
      .post("/json-random", { num: listLength, numLists: numLists, repeatNums: checked })
      .then(response => {
        if (response.status === 200) {
          setRandomNumLists(response.data);
        } else {
          setRandomNumLists([]);
          console.log("Failed");
        }
      })
      .catch(error => {
        console.log(`Error: ${error.message}`);
      });
  };
  return (
    <div>
      <form onSubmit={getData}>
        <TextField
          onChange={e => {
            setListLength(parseInt(e.target.value));
          }}
          label="How many values in a list?"
        ></TextField>
        <TextField
          onChange={e => {
            setNumLists(parseInt(e.target.value));
          }}
          label="How many lists?"
        ></TextField>
        <Checkbox checked={checked} onClick={()=> setChecked(!checked)} label="repeating numbers?"></Checkbox>
        {console.log(checked)}
        <Button
          onClick={() => {
            getData();
          }}
        >
          {" "}
          Generate{" "}
        </Button>
      </form>
      {console.log("Array1", randomNumLists)}
      <ListDisplay randNum2dArray={randomNumLists} />
    </div>
  );
}
