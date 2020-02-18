import Copyright from "./Copyright";
import {makeStyles} from "@material-ui/core";
import React from "react";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import HistoryChart from "./HistoryChart";
import Box from "@material-ui/core/Box/Box";
import clsx from "clsx";
import HistorySlider from "./HistorySlider";
import Title from "./Title";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        paddingTop: theme.spacing(6),
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeightChart: {
        height: 500,
    },

}));

export default function History() {

    const classes = useStyles();

    const fixedHeightPaperChart = clsx(classes.paper, classes.fixedHeightChart);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={2}>

                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaperChart}>
                           <Title>土壤温度</Title>
                           <HistorySlider />
                           <HistoryChart />
                        </Paper>
                    </Grid>

                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    );
}
