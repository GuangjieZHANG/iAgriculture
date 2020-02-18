import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from "react-router-dom";
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
    <div>
        <NavLink to="/dashboard">
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="主页" />
        </ListItem>
        </NavLink>
        <NavLink to="/dashboard/source">
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="产品溯源" />
        </ListItem>
        </NavLink>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>结点详细信息</ListSubheader>
        <NavLink to="/dashboard/history">
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="结点一" />
        </ListItem>
        </NavLink>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="结点二" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="结点三" />
        </ListItem>
    </div>
);
