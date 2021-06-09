import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "80px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "black"
    },
    name:{
        fontSize:"70px"

    },
    lorem:{
        paddingLeft:"10px",
        fontSize:"40px",
        color:"#00897b"
    }
}));

function MainUI() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h1 className={classes.name}>Wooden Furniture Store</h1>
                            <p>Furniture Website Template</p>
                            <h3 className={classes.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales Dellentesque felis, in dignissim diam eleifend et. Aenean sagittis lacus sed augue mollis convallis. Vivamus orci ligula, rhoncus a finibus at, molestie bibendum ex. Morbi lacinia eros non orci eleifend elementum.</h3>
                            <Button variant="contained" color="primary" disableElevation>
                                Learn More
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default MainUI
