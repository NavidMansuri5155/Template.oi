import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        paddingTop: "80px"
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: "#fff",
        backgroundColor: "#5d919e",
    },
    logo: {
        fontSize: "59px"
    },
    icon: {
        fontSize: "40px",
        initialLetter: "90px",
        letterSpacing: "30px"
    }

}));


function FooterUI() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div className={classes.logo}>
                            <span>ＮÃｖᎥＤ 𝐌αŇรⓤＲ𝕚 </span>
                        </div>
                        <Grid container spacing={0}>
                            <Grid xs>
                                <Paper className={classes.paper}>
                                    <span><b>Office:</b></span><br />
                                    <span>New York</span><br />
                                    <span>8345 State</span><br />

                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <span><b>Address:</b></span><br />
                                    <span>7345 Street</span><br />
                                    <span>Staten Island</span><br />
                                </Paper>
                            </Grid>
                            <Grid item xs>
                                <Paper className={classes.paper}>
                                    <span><b>Contacts:</b></span><br />
                                    <span>support@mobirise.com</span><br />
                                    <span>Fax: +1 (0) 000 0000 002</span><br />
                                </Paper>
                            </Grid>
                        </Grid><br />
                        <div className={classes.icon} >
                            <AiFillFacebook /> <AiOutlineInstagram /> <AiFillGithub /> <AiOutlineGoogle />
                        </div><br />
                        <span> <b>© Copyright</b> 2021 Mobirise - Furniture Website Template - All Rights Reserved</span>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default FooterUI
