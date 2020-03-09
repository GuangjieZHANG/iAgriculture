import React from 'react';
import WeatherIcon from 'react-icons-weather';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    top: {
        marginTop: 10,
    },
    weatherIcon: {
        margin: 10,
    },
});

export default function Weather(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>{props.date}天气</Title>
            <Typography component="p" variant="h6">
                {props.cond_d} 转 {props.cond_n}
            </Typography>
            <Typography component="p" variant="h6">
                气温： {props.temperature} ℃
            </Typography>
            <Typography component="p" variant="h6">
                空气湿度： {props.humidity}%
            </Typography>
            <Typography component="p" variant="h6">
                降水概率： {props.possibility}%
            </Typography>
            <Typography component="p" variant="h6">
                {props.wind}
            </Typography>
        </React.Fragment>
    );
}
