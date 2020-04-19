import React from "react";
import Grid from "@material-ui/core/Grid";
import MainArea from "./body/MainArea";
import SideBar from "./components/SideBar";

const SideBarTopics = {
  binarySearch: {
    name: 'Binary Search',
    path: 'binary-search'
  },
  selectionSort: {
    name: 'Selection Sort',
    path: 'selection-sort',
  },
  insertionSort: {
    name: 'Insertion Sort',
    path: 'insertion-sort',
  },
  bubbleSort: {
    name: 'Bubble Sort',
    path: 'bubble-sort'
  },
  home: {
    name: 'Home',
    path: 'home'
  }
};

/**
 * Function used to create the main layout of the application
 */
export default function MainLayout({Component}) {
  return (
    <Grid container direction='row' style={{ height: "100vh" }}>
      <Grid container item xs={2}>
        <SideBar items={Object.values(SideBarTopics)} />
      </Grid>
      <Grid item container direction="column" xs={10}>
        <MainArea Component = {Component}/>
      </Grid>
    </Grid>
  );
}
