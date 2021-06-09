import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        paddingLeft: "10px",
        backgroundColor: "#6b9e51",
        padding: theme.spacing(2),

    },
    paper: {
        padding: theme.spacing(3),
        color: "#000",
        fontSize: "53px",
        backgroundColor: "#ede7f6",
        borderRadius: "40px",
    },
    pic: {
        padding: theme.spacing(6),
        maxHeight: "700px",
        borderRadius: "90px",
        paddingLeft: "1px",
        paddingRight: "20px",
        paddingTop: "0px",
        paddingBottom: "10px",
    },
    pera: {
        padding: theme.spacing(3),
        fontSize: "20px",
    },
    heding: {
        fontWeight: "bold",
        fontSize:"43px"
    },
    list: {
        color: "#5d919e",
        marginTop: "50px",
        padding: theme.spacing(3),
    },
    mar:{
        marginBottom:"10px",
        marginTop:"80px"
    }
}));



function Choose() {
    const classes = useStyles();

    return (
        <div className={classes.mar}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.pera}>
                        <span className={classes.heding}>Natural Materials Features</span>
                        <div className={classes.list}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Fusce ornare risus vel tellus tempor tempor</li>
                                <li>Suspendisse ut lobortis sem</li>
                                <li>Praesent ac scelerisque nulla</li>
                                <li>Maecenas sed magna quis leo fringilla molestie</li>
                                <li>Praesent ultrices augue a dapibus tempus</li>
                                <li>Aliquam egestas faucibus ullamcorper</li>
                                <li>Phasellus euismod accumsan pretium</li>
                                <li>Maecenas sed magna quis leo fringilla molestie</li>
                            </ul>   
                        </div>
                        <span className={classes.pera}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, feugiat libero.</span><br /><br /><br />
                        <span className={classes.pera}><b>Wood:</b> is a porous and fibrous structural tissue found in the stems and roots of trees and other woody plants. It is an organic material – a natural composite of cellulose fibers that are strong in tension and embedded in a matrix of lignin that resists compression.Pellentesque sed ligula elementum, feugiat libero, nec mollis purus molestie.</span>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Image className={classes.pic} src="https://images.unsplash.com/photo-1515446134809-993c501ca304?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default Choose;


