import React from 'react';
import logo from '../../images/logo.png'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    img: {
        maxWidth: "200px",
        maxHeight: "200px",
        width: "auto",
        height: "auto",
        marginTop: "70px",
    }
});

const LoginLogo = () => {
    const classes = useStyles();
    return (
        <div class="logo">
            <img src={logo} className={classes.img} />
        </div>

    )
}
export default LoginLogo