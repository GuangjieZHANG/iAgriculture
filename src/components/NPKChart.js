import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Typography
} from '@material-ui/core';
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles =  makeStyles(theme => ({
    root: {
        height: '100%'
    },
    chartContainer: {
        position: 'relative',
        height: '250px'
    },
    stats: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center'
    },
    device: {
        textAlign: 'center',
        padding: theme.spacing(1)
    },
    deviceIcon: {
        color: theme.palette.icon
    }
}));

export default function NPKChart(props) {
    const { className, ...rest } = props;

    const classes = useStyles();
    const theme = useTheme();

    const total = props.n + props.p + props.k;
    const n = (props.n / total).toPrecision(2);
    const p = (props.p / total).toPrecision(2);
    const k = (1 - n - p).toPrecision(2);

    const data = {
        datasets: [
            {
                data: [n, p, k],
                backgroundColor: [
                    theme.palette.primary.main,
                    theme.palette.error.main,
                    theme.palette.warning.main
                ],
                borderWidth: 8,
                borderColor: "#ffffff",
                hoverBorderColor: "#ffffff"
            }
        ],
        labels: ['氮元素', '磷元素', '钾元素']
    };

    const options = {
        legend: {
            display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        tooltips: {
            enabled: true,
            mode: 'index',
            intersect: false,
            borderWidth: 1,
            borderColor: theme.palette.divider,
            backgroundColor: "#ffffff",
            titleFontColor: theme.palette.text.primary,
            bodyFontColor: theme.palette.text.secondary,
            footerFontColor: theme.palette.text.secondary
        }
    };

    const devices = [
        {
            title: '氮元素',
            value: props.n,
            color: theme.palette.primary.main
        },
        {
            title: '磷元素',
            value: props.p,
            color: theme.palette.error.main
        },
        {
            title: '钾元素',
            value: props.k,
            color: theme.palette.warning.main
        }
    ];

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader
                title="土壤肥力"
            />
            <Divider />
            <CardContent>
                <div className={classes.chartContainer}>
                    <Doughnut
                        data={data}
                        options={options}
                    />
                </div>
                <div className={classes.stats}>
                    {devices.map(device => (
                        <div
                            className={classes.device}
                            key={device.title}
                        >
                            <span className={classes.deviceIcon}>{device.icon}</span>
                            <Typography variant="body1">{device.title}</Typography>
                            <Typography
                                style={{ color: device.color }}
                                variant="h4"
                            >
                                {device.value}
                            </Typography>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
