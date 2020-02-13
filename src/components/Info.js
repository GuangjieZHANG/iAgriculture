import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    top: {
        marginTop: 10,
    },
});

export default function Info(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>{props.title}</Title>
            <Typography component="p" variant="h6">
                地理信息：{props.geometry}
            </Typography>
            <Typography component="p" variant="h6">
                占地面积：{props.surface}
            </Typography>
        </React.Fragment>
    );
}
