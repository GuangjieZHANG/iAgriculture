import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import SimpleCard from './SimpleCard';
import VideoImage from "../img/video.jpg";
import NPKChart from "./NPKChart";
import LeafletMap from "./LeafletMap";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                新盒子智能科技有限公司
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
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
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
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
        height: 316,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedHeightPaperChart = clsx(classes.paper, classes.fixedHeightChart);
    const fixedHeightPaperVideo = clsx(classes.paper, classes.fixedHeightVideo);
    const fixedHeightPaperWeather = clsx(classes.paper, classes.fixedHeightWeather);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        陕西省榆林市米脂苹果园
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} container spacing={2}>
                            {/* 土壤温度 */}
                            <Grid item lg={4}>
                                <Paper className={fixedHeightPaper}>
                                    <SimpleCard title="土壤温度" value="27 ℃"/>
                                </Paper>
                            </Grid>
                            {/* 土壤湿度 */}
                            <Grid item lg={4}>
                                <Paper className={fixedHeightPaper}>
                                    <SimpleCard title="土壤湿度 " value="71.3 %"/>
                                </Paper>
                            </Grid>
                            {/* 土壤酸碱度 */}
                            <Grid item lg={4}>
                                <Paper className={fixedHeightPaper}>
                                    <SimpleCard title="土壤酸碱度" value="6.5"/>
                                </Paper>
                            </Grid>

                            {/* 空气温度 */}
                            <Grid item lg={4}>
                                <Paper className={fixedHeightPaper}>
                                    <SimpleCard title="空气温度" value="13 ℃"/>
                                </Paper>
                            </Grid>
                            {/* 空气湿度 */}
                            <Grid item lg={4}>
                                <Paper className={fixedHeightPaper}>
                                    <SimpleCard title="空气湿度" value="53.3 %"/>
                                </Paper>
                            </Grid>
                            {/* 风向 */}
                            <Grid item lg={4}>
                                <Paper className={fixedHeightPaper}>
                                    <SimpleCard title="风向" value="东北风"/>
                                </Paper>
                            </Grid>

                        </Grid>

                        {/* video */}
                        <Grid item lg={6}>
                            <Paper className={fixedHeightPaperVideo}>
                                <Grid className={classes.img} lg={12} />
                            </Paper>
                        </Grid>

                        <Grid item lg={8}>
                            <Paper className={fixedHeightPaperChart}>
                                <LeafletMap/>
                            </Paper>
                        </Grid>

                            <Grid item lg={4}>
                                <Paper className={fixedHeightPaperChart}>
                                    <NPKChart/>
                                </Paper>
                            </Grid>
                        <Grid item lg={3}>
                            <Paper className={fixedHeightPaperWeather}>

                            </Paper>
                        </Grid>
                        <Grid item lg={3}>
                            <Paper className={fixedHeightPaperWeather}>

                            </Paper>
                        </Grid>
                        <Grid item lg={3}>
                            <Paper className={fixedHeightPaperWeather}>

                            </Paper>
                        </Grid>
                        <Grid item lg={3}>
                            <Paper className={fixedHeightPaperWeather}>

                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}
