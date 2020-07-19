import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
    button: {
        width: "200px",
        backgroundImage: "linear-gradient(to right, #146347 0%, #339b59 51%, #13835c 100%)",
        backgroundPosition: "right center",
        boxShadow: "-5px 5px 14px rgba(108, 111, 114, 0.45)",
        marginTop: "50px"
    }

});

const LoginButton = (props) => {
    const { onClick, label } = props;
    const classes = useStyles();
    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onClick}>
            {label}
        </Button>
    )
}
export default LoginButton