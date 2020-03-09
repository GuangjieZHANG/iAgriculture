import React, {useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

let data = [
    createData('15:41', 17),
    createData('16:41', 100),
    createData('17:41', 100),
    createData('18:41', 100),
    createData('19:41', 100),
    createData('20:41', 200),
    createData('21:41', 200),
];

export default function HistoryChart(props) {
    const theme = useTheme();

    useEffect(()=> {
        console.log(props.dataSource);
        console.log(data)
    },[]);

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <LineChart
                    data={props.dataSource}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
