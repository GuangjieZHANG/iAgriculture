import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

export default function Info(props) {

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
