import React from 'react';
import "../App.css"
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        paddingLeft: "20px",
    },
    paper: {
        padding: theme.spacing(3),
        color: "#000",
        fontSize: "60px",
        fontWeight: "900",
        
    },
    unique: {
        fontSize: "54px",
        fontWeight: "900",
    },
    lorem: {
        fontSize: "20px",
        padding: theme.spacing(3),

    },
    contact: {
        marginBottom: "100px",
        color: "#5d919e",
        padding: theme.spacing(3),
    },
    center: {
        padding: theme.spacing(3),
    },
    rings:{
        padding: theme.spacing(3),
    },
    mar:{
        marginBottom:"80px"
    }
}));



function ContactsUI() {
    const classes = useStyles();

    
    return (
        <div className={classes.mar}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <span>Contacts:-</span>
                        <Image src="https://mobirise.com/extensions/woodm4/assets/images/02-800x600.jpg" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper >
                        <div className={classes.center}>
                            <span className={classes.unique}> Unique Wood Products</span><br /><br /><br />
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero.</span><br /><br /><br />
                            <span>support@mobirise.com</span> <br />
                            <span> 435-35 32 78</span><br /><br /><br />
                            <span><b>Address:</b></span><br />
                            <span>1234 Street Name</span><br />
                            <span>City, AA 99999</span><br /><br /><br />
                            <span><b>Contacts:</b></span><br />
                            <span>Phone: +1 (0) 000 0000 001</span><br />
                            <span>Fax: +1 (0) 000 0000 002</span><br /><br /><br />
                            <span><b>Office:</b></span><br />
                            <span>New York</span><br />
                            <span>8345 State</span><br /><br /><br />
                            <span><b>TeamWork:</b></span><br />
                            <span>Teamwork is the collaborative effort of a group to achieve a common goal or to complete a task in the most effective and efficient way.</span><br /><br />
                            <span><b>Growth rings:</b></span><br />
                            <span className="rings">Wood is a porous and fibrous structural tissue found in the stems and roots of trees and other woody plants. It is an organic material  a natural composite of cellulose fibers that are strong in tension and embedded in a matrix of lignin that resists compression.Wood, in the strict sense, is yielded by trees, which increase in diameter by the formation... </span>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default ContactsUI;
