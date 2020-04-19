import React from "react";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import TopBar from '../components/TopBar';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

/**
 * Arrow Function used to create styles for the Main Area component
 */
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
}));

/**
 * Function used to create a main area for the components
 */
export default function MainArea({Component}) {
    const classes = useStyles();
    return (
        <Grid container direction = 'row' className={classes.root}>
            <Grid item xs={12}>
                <TopBar/>
                {Component}
            </Grid>
        </Grid>
    )
}