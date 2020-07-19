import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bottom: {
        position: 'fixed',
        bottom: '10px',
        color: 'white',
        fontFamily: 'serif',
        animation: 'go-back 3s infinite alternate',
    }

});

const LoginBottom = () => {
    const classes = useStyles();
    return (
        <div className={classes.bottom}>
            © Copyright 2020 | Desenvolvido por GE2 Tecnologia
        </div>
    )
}
export default LoginBottom