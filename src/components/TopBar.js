import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/**
 * Arrow Function used to create the styles for the TopBar component
 */
const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.main,
        width: '100%',
        padding:'10px',
    },
    text: {
        color:'white'
    }
}));

export default function TopBar() {
    const classes = useStyles();
    return (
        <Grid container direction = 'row' className={classes.root}>
            <Grid container item xs={4}/>
            <Grid container item xs={4} justify='center' alignItems='center'>
                <Typography variant='h4' className={classes.text}>
                    Visual Debugger
                </Typography>
            </Grid>
            <Grid container item xs={4} justify='flex-end'>
            </Grid>
        </Grid>
    )
}