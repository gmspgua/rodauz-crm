import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Route, Redirect } from 'react-router-dom';


const drawerWidth = 80;

const useStyles = makeStyles((theme) => ({
    Logout: {
        height: '20px',
        width: '20px',
        backgroundColor: '#00d142',
        position: 'absolute',
        left: `calc(100% - ${drawerWidth}px)`,
        borderRadius: '60px',
        color: 'white',
        "&:hover, &:focus": {
            backgroundColor: 'black',
            color: '#00d142',
            borderColor: '#000 #999 #999 #000',
        },
    },
}));

const Logout = (props) => {
    const { logout } = props;
    const classes = useStyles();
    const goOut = () => {
        console.log('sair');
    };

    return (

        <IconButton aria-label="upload picture" component="span" className={classes.Logout} size="medium">
            <ExitToAppIcon fontSize="large" style={{ color: 'white' }} onClick={logout} />

        </IconButton >

    );
}

export default Logout;