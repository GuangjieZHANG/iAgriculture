import Copyright from "./Copyright";
import {makeStyles} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import HistoryChart from "./HistoryChart";
import Box from "@material-ui/core/Box/Box";
import clsx from "clsx";
import Title from "./Title";
import {environment} from "../environments/environment";

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
        height: 400,
    },

}));

function createData(time, amount) {
    return { time, amount };
}

export default function History(props) {

    const classes = useStyles();
    const axios = require('axios').default;

    const [device, setDevice] = useState("st1");
    const [url, setUrl] = useState(environment.apiServerURL + '/dataline/history/' + device);

    const [earthTemData, setEarthTemData] = useState([]);
    const [earthHumData, setEarthHumData] = useState([]);
    const [earthPhData, setEarthPhData] = useState([]);
    const [airTemData, setAirTemData] = useState([]);
    const [airHumData, setAirHumData] = useState([]);
    const [earthNData, setEarthNData] = useState([]);
    const [earthPData, setEarthPData] = useState([]);
    const [earthKData, setEarthKData] = useState([]);

    async function init() {
        const result = await axios(url);
        result.data.map((line) => {
            setEarthTemData(earthTemData.push(createData(line.time.substr(11,5),line.earthTempreture)));
            setEarthHumData(earthHumData.push(createData(line.time.substr(11,5),line.earthHumidity)));
            setEarthPhData(earthPhData.push(createData(line.time.substr(11,5),line.earthPh)));
            setAirTemData(airTemData.push(createData(line.time.substr(11,5),line.airTempreture)));
            setAirHumData(airHumData.push(createData(line.time.substr(11,5),line.airHumidity)));
            setEarthNData(earthNData.push(createData(line.time.substr(11,5),line.nitrogen)));
            setEarthPData(earthPData.push(createData(line.time.substr(11,5),line.phosphorus)));
            setEarthKData(earthKData.push(createData(line.time.substr(11,5),line.potassium)));
            console.log("-------------"+earthTemData);
        });
        /*createData(dataline.time,dataline.earthTempreture)*/
    }

    useEffect(()=> {
        init();
    },[url]);

    const fixedHeightPaperChart = clsx(classes.paper, classes.fixedHeightChart);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaperChart}>
                           <Title>土壤温度</Title>
                           <HistoryChart data={earthTemData}/>
                        </Paper>
                    </Grid>

                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaperChart}>
                            <Title>土壤湿度</Title>
                            <HistoryChart data={earthHumData}/>
                        </Paper>
                    </Grid>

                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaperChart}>
                            <Title>土壤酸碱度</Title>
                            <HistoryChart data={earthPhData}/>
                        </Paper>
                    </Grid>

                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaperChart}>
                            <Title>土壤氮含量</Title>
                            <HistoryChart data={earthNData}/>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaperChart}>
                            <Title>土壤磷含量</Title>
                            <HistoryChart data={earthPData}/>
                        </Paper>
                    </Grid>

                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaperChart}>
                            <Title>土壤钾含量</Title>
                            <HistoryChart data={earthKData}/>
                        </Paper>
                    </Grid>


                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaperChart}>
                            <Title>空气温度</Title>
                            <HistoryChart data={airTemData}/>
                        </Paper>
                    </Grid>

                    <Grid item lg={4}>
                        <Paper className={fixedHeightPaperChart}>
                            <Title>空气湿度</Title>
                            <HistoryChart data={airHumData}/>
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
