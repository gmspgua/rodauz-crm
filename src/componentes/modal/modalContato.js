import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { TextField } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EmailIcon from '@material-ui/icons/Email';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FingerprintIcon from '@material-ui/icons/Fingerprint';



function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            flexDirection: 'row',
            width: 600,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(2, 4, 3),
            borderRadius: "10px",
        },
        textField: {
            width: "90%",
            marginLeft: "10px",
            paddingTop: "5px"
        },
        personIcon: {
            paddingTop: "10px"
        }
    }),
);


export default function SimpleModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [segmento, setSegmento] = React.useState('pf');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log('banana');
    console.log(segmento);

    const handleChange = (event) => {
        setSegmento(event.target.value);
    };
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div>
                <RadioGroup row aria-label="position" name="position" defaultValue={segmento} onChange={handleChange} >
                    <FormControlLabel value="pf" control={<Radio color="primary" />} label="Pessoa Fisica" />
                    <FormControlLabel value="pj" control={<Radio color="primary" />} label="Pessoa Juridica" />
                </RadioGroup>

                <PersonIcon fontSize="large" className={classes.personIcon} />
                <TextField id="filled-basic" label="nome" variant="filled" className={classes.textField} />
                <PhoneIcon fontSize="large" className={classes.personIcon} />
                <TextField id="filled-basic" label="telefone" variant="filled" className={classes.textField} />
                <LocationOnIcon fontSize="large" className={classes.personIcon} />
                <TextField id="filled-basic" label="endereço" variant="filled" className={classes.textField} />
                <LocationCityIcon fontSize="large" className={classes.personIcon} />
                <TextField id="filled-basic" label="cidade" variant="filled" className={classes.textField} />
                <TextField id="filled-basic" label="estado" variant="filled" className={classes.textField} style={{ marginLeft: "45px" }} />
                <EmailIcon fontSize="large" className={classes.personIcon} />
                <TextField id="filled-basic" label="e-mail" variant="filled" className={classes.textField} />
                <FingerprintIcon fontSize="large" className={classes.personIcon} />
                {segmento === 'pf' || !segmento
                    ?
                    <TextField id="filled-basic" label="CPF" variant="filled" className={classes.textField} />
                    :
                    <TextField id="filled-basic" label="CNPJ" variant="filled" className={classes.textField} />

                }
            </div>
        </div>
    );

    return (


        < div >

            <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<AddOutlinedIcon />}
                style={{ textTransform: "none" }}
                onClick={handleOpen}>
                Adicionar
            </Button>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div >
    );
}