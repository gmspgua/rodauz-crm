import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';

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

const LoginEmailField = (props) => {
    const { keyPressed, onChangeHandle, defaultValue } = props;
    const classes = useStyles();
    return (
        <div className={classes.email}>
            <TextField
                placeholder="exemplo@provedor.com.br"
                id="input-with-icon-grid"
                className="textEmail"
                autoComplete='off'
                onKeyPress={keyPressed}
                defaultValue={defaultValue}
                onChange={onChangeHandle}
                InputProps={Object.assign({ disableUnderline: true },
                    {
                        startAdornment: (
                            <InputAdornment position="end" variant="filled">
                                <PersonIcon color="primary" style={{ paddingRight: "20px" }} />
                            </InputAdornment>
                        ),
                    }, {
                    style: {
                        textAlign: 'center',
                        fontSize: "13px",
                        paddingTop: "3px",
                        width: "300px",
                        maxLength: "31"
                    }
                })}
            />
        </div>

    )
}
export default LoginEmailField