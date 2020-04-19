import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { MainTheme } from "./Theme";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

/**
 * Arrow Function used to create styles for the SideBar component
 */
const useStyles = makeStyles(theme => ({
  root: {
    //theme.palette.warning.main
    background: "#e0e0e0",
    width: "100%",
    minWidth: "100px"
  }
}));

/**
 * Function used to create a the Side Bar of the application
 */
export default function SideBar({ items }) {
  const history = useHistory();
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {items.map((itemInfo,ind) => (
        <ListItem button key = {ind}>
          <ListItemText onClick={() => history.push(`/${itemInfo.path}`)}>
            <Typography variant="overline">{itemInfo.name}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
