import Copyright from "./Copyright";
import {makeStyles} from "@material-ui/core";
import VideoImage from "../img/video.jpg";
import React, {useState, useEffect} from "react";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import SimpleCard from "./SimpleCard";
import LeafletMap from "./LeafletMap";
import NPKChart from "./NPKChart";
import Weather from "./Weather";
import Info from "./Info";
import Box from "@material-ui/core/Box/Box";
import clsx from "clsx";
import {environment} from "../environments/environment";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
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
    img: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${VideoImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    fixedHeight: {
        height: 150,
    },
    fixedHeightChart: {
        height: 480,
    },
    fixedHeightVideo: {
        height: 316,
    },
    fixedHeightWeather: {
        height: 256,
    },
}));

export default function Home() {

    const axios = require('axios').default;

    const [device, setDevice] = useState("st1");
    const [dataLine, setDataLine] = useState({});

    useEffect(async () => {
        // get climate data here

        const result = await axios(
            environment.apiServerURL + '/dataline/last/' + device
        );
        setDataLine(result.data);
        console.log(result.data);
    }, [device]);


    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedHeightPaperChart = clsx(classes.paper, classes.fixedHeightChart);
    const fixedHeightPaperVideo = clsx(classes.paper, classes.fixedHeightVideo);
    const fixedHeightPaperWeather = clsx(classes.paper, classes.fixedHeightWeather);

    return (
    <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={2}>
                <Grid lg={6} container spacing={2} item>
                    {/* 土壤温度 */}
                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <SimpleCard title="土壤温度" value={dataLine.earthTempreture + " ℃"}/>
                        </Paper>
                    </Grid>
                    {/* 土壤湿度 */}
                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <SimpleCard title="土壤湿度 " value={dataLine.earthHumidity + "%"}/>
                        </Paper>
                    </Grid>
                    {/* 土壤酸碱度 */}
                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <SimpleCard title="土壤酸碱度" value={dataLine.earthPh }/>
                        </Paper>
                    </Grid>

                    {/* 空气温度 */}
                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <SimpleCard title="空气温度" value={dataLine.airTempreture + " ℃"}/>
                        </Paper>
                    </Grid>
                    {/* 空气湿度 */}
                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <SimpleCard title="空气湿度" value={dataLine.airHumidity + "%"}/>
                        </Paper>
                    </Grid>
                    {/* 风向 */}
                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <SimpleCard title="风向" value={dataLine.wind + " ℃"}/>
                        </Paper>
                    </Grid>

                </Grid>

                {/* video */}
                <Grid lg={6} xs={12} item>
                    <Paper className={fixedHeightPaperVideo}>
                        <Grid className={classes.img} lg={12} xs={12} item />
                    </Paper>
                </Grid>

                <Grid item lg={8} xs={12} >
                    <Paper className={fixedHeightPaperChart}>
                        <LeafletMap device = "st1"/>
                    </Paper>
                </Grid>

                <Grid item lg={4}>
                    <Paper className={fixedHeightPaperChart}>
                        <NPKChart/>
                    </Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper className={fixedHeightPaperWeather}>
                        <Weather title="明日天气" temperature="2 ~ 8" possibility="35" wind="偏东风3级"/>
                    </Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper className={fixedHeightPaperWeather}>
                        <Weather title="后日天气" temperature="4 ~ 7" possibility="41" wind="东北风4级"/>
                    </Paper>
                </Grid>
                <Grid item lg={6}>
                    <Paper className={fixedHeightPaperWeather}>
                        <Info title="陕西省榆林市米脂苹果园" geometry="" surface=""/>
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
