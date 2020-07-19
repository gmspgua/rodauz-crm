import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    alert: {
        "& .MuiAlert-icon": {
            padding: "0px"
        },
        "& .MuiAlert-message": {
            padding: "0px",
            paddingTop: "2px",
        },
        banner: {
            width: "469px",
            height: "20px"
        }
    }
});

const ErrorMessage = (props) => {
    const classes = useStyles();
    const { messageError } = props;
    return (
        <MuiAlert elevation={6}
            className={[classes.alert, classes.banner]}
            variant="filled"
            severity="error">
            {messageError}
        </MuiAlert >

    )
}
export default ErrorMessage