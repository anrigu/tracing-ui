import { createSlice } from "@reduxjs/toolkit";
import apiClient from "../apis/apiClient";

const ui = createSlice({
  reducers: {
    setShowSpinner(state, { payload: indicator }) {
      state.showSpinner = indicator.showSpinner;
    },
    setNumArray(state, { payload: data }) {
      state.numArray = data.numArray;
    },
    setActionList(state, { payload: data }) {
      state.actionList = data.actionList;
    },
  },
  initialState: {
    showSpinner: false,
    numArray: [],
    actionList: [],
  },
  name: "ui",
});

export const thunk = () => {
  return (dispatch) => {
    console.log("reached");
    dispatch(ui.actions.setShowSpinner({ showSpinner: true }));
    apiClient
      .post("/json-random", { num: 10, numLists: 1, repeatNums: false })
      .then((response) => {
        if (response.status === 200) {
          dispatch(ui.actions.setNumArray(response.data));
          dispatch(ui.actions.setShowSpinner({ showSpinner: false }));
        } else {
          dispatch(ui.actions.setNumArray("Bad"));
          dispatch(ui.actions.setShowSpinner({ showSpinner: false }));
        }
      });
  };
};

export const getData = () => {
  return (dispatch) => {
    dispatch(ui.actions.setShowSpinner({ showSpinner: true }));
    apiClient
      .post("/bubble-sort", { numNums: 4, repeatNums: false })
      .then((response) => {
        if (response.status === 200) {
          dispatch(
            ui.actions.setNumArray({ numArray: response.data.randArray })
          );
          console.log('adasd',response.data.actionList)
          dispatch(
            ui.actions.setActionList({ actionList: response.data.actionList })
          );
        } else {
          dispatch(ui.actions.setNumArray("Bad"));
          dispatch(ui.actions.setShowSpinner({ showSpinner: false }));
        }
      });
  };
};

export default ui;
