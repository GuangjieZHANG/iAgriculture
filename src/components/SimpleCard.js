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

export default function SimpleCard(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>{props.title}</Title>
            <Typography component="p" variant="h4">
                {props.value}
            </Typography>
            <div className={classes.top}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    查看历史
                </Link>
            </div>
        </React.Fragment>
    );
}
