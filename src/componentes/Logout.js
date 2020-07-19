import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

    return (
        <IconButton aria-label="upload picture" component="span" className={classes.Logout} size="medium">
            <ExitToAppIcon fontSize="large" style={{ color: 'white' }} onClick={logout} />
        </IconButton >
    );
}

export default Logout;