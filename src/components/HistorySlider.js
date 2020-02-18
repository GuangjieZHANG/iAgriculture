import Slider from "@material-ui/core/Slider";
import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
    button: {
      marginLeft: 25,
    },
}));

const tempMarks = [
    {
        value: -20,
        label: "-20°C"
    },
    {
        value: 0,
        label: "0°C"
    },
    {
        value: 20,
        label: "20°C"
    },
    {
        value: 40,
        label: "40°C"
    },
    {
        value: 60,
        label: "60°C"
    },
];

const humidityMarks = [
    {
        value: 0,
        label: "0%"
    },
    {
        value: 20,
        label: "20%"
    },
    {
        value: 40,
        label: "40%"
    },
    {
        value: 60,
        label: "60%"
    },
    {
        value: 80,
        label: "80%"
    },
    {
        value: 100,
        label: "100%"
    },
];

const phMarks = [
    {
        value: 0,
    },
    {
        value: 3,
    },
    {
        value: 6,
    },
    {
        value: 7,
    },
    {
        value: 8,
    },
    {
        value: 11,
    },
    {
        value: 14,
    },
];

const MySlider = withStyles({
    root: {
        height: 8,
        marginLeft: 15,
        marginRight: 15,

    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -6,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

export default function HistorySlider() {

    const classes = useStyles();

    return (
        <React.Fragment>
        <div className={classes.root}>
            <Typography gutterBottom> 正常温度范围：20 ~ 40 °C
            </Typography>
            <MySlider getAriaLabel={index => (index === 0 ? 'Minimum' : 'Maximum')}
                      valueLabelDisplay="auto" defaultValue={[20, 40]} marks={tempMarks} min={-20} max={60}/>
                <Typography gutterBottom> 已选择：20 ~ 40 °C
                    <Button variant="contained" color="primary" className={classes.button}>
                    更改
                    </Button>
                </Typography>
        </div>
        </React.Fragment>
    );


}
