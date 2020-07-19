import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded';


const useStyles = makeStyles({
    bottom: {
        position: 'fixed',
        bottom: '10px',
        color: 'white',
        fontFamily: 'serif',
        animation: 'go-back 3s infinite alternate',
    },

    email: {
        background: "#f3eeed",
        marginTop: "10px",
        marginLeft: "20%",
        marginRight: "15px",
        marginBottom: "10px",
        height: "30px",
        flexDirection: "row",
        display: "flex",
        borderWidth: "1.5px",

        borderColor: "#8f8d8d",
        borderStyle: "solid",
        borderRadius: "5px",
        width: "60%"
    }

});

const LoginPasswordField = (props) => {
    const { keyPressed, onChangeHandle, defaultValue } = props;
    const classes = useStyles();
    return (
        <div className={classes.email}>
            <TextField
                id="standard-password-input"
                placeholder="*********"
                InputLabelProps={{ style: { fontWeight: "bold", textAlign: "center", visibility: "visible" } }}
                type="password"
                defaultValue={defaultValue}
                onKeyPress={keyPressed}
                autoComplete="off"
                onChange={onChangeHandle}
                InputProps={Object.assign({ disableUnderline: true },
                    {
                        startAdornment: (
                            <InputAdornment position="end">
                                <HttpsRoundedIcon color="primary"
                                    style={{ paddingRight: "20px" }}
                                />
                            </InputAdornment>
                        ),
                    }, { maxLength: 20 }, {
                    style: {
                        textAlign: 'center',
                        fontSize: "13px",
                        paddingTop: "3px",
                        width: "300px",
                    }
                }

                )}
            />
        </div>

    )
}
export default LoginPasswordField