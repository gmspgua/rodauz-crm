import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { TextField } from '@material-ui/core';





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

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        borderRadius: "10px",
        width: "500px",
        overflow: "scroll"

    },
    textField: {
        width: "70%",
        marginLeft: "10px",
        paddingTop: "5px"
    },
    personIcon: {
        paddingBottom: "10px"
    },
    column: {
        float: "left",
        width: "50%",
        padding: "10px",
        height: "10px",
    },
    CamposFormulario: {
        width: "300px",
        marginLeft: "25px",
        "&:hover, &:focus": {
            backgroundColor: "#ffff69",
        }
    }
}))


export default function SimpleModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [visibility2, setVisibility2] = React.useState('none');
    const [visibility3, setVisibility3] = React.useState('none');
    const [visibility4, setVisibility4] = React.useState('none');




    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



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
            >

                < div style={{
                    backgroundColor: "white",
                    width: "80%",
                    height: "70%",
                    position: "fixed",
                    marginLeft: "150px",
                    marginRight: "150px",
                    marginTop: "100px",
                    borderRadius: "10px",
                }
                }>

                    <div style={{
                        marginTop: "30px",
                        backgroundColor: "black",
                    }} >


                        <div style={{ width: "50%", position: "absolute" }}>
                            <div style={{ marginTop: "25px" }}>
                                <TextField id="outlined-basic" fullWidth="true" className={classes.CamposFormulario} label="Razão Social" variant="outlined" size="small" />
                            </div>
                            <div style={{ marginTop: "25px" }}>
                                <TextField id="outlined-basic" fullWidth="true" label="CNPJ" variant="outlined" size="small" style={{ width: "300px", marginLeft: "25px" }} />
                            </div>
                            <div style={{ marginTop: "25px" }}>
                                <TextField id="outlined-basic" fullWidth="true" label="Endereço" placeholder="ex: Rua: João Negrão" variant="outlined" size="small" style={{ width: "300px", marginLeft: "25px" }} />
                                <TextField id="outlined-basic" fullWidth="true" label="Nº" placeholder="ex: 12" inputProps={{ maxLength: 2 }} variant="outlined" size="small" style={{ width: "80px", marginLeft: "5px" }} />
                            </div>
                            <div style={{ marginTop: "25px" }}>
                                <TextField id="outlined-basic" fullWidth="true" label="Cidade" variant="outlined" size="small" style={{ width: "300px", marginLeft: "25px" }} />
                                <TextField id="outlined-basic" fullWidth="true" label="UF" placeholder="ex: PR" inputProps={{ maxLength: 2 }} variant="outlined" size="small" style={{ width: "80px", marginLeft: "5px" }} />
                                <TextField id="outlined-basic" fullWidth="true" label="País" placeholder="ex: BR" inputProps={{ maxLength: 2 }} variant="outlined" size="small" style={{ width: "80px", marginLeft: "5px" }} />
                            </div>
                        </div>


                        <div style={{ width: "50%", marginLeft: "50%", position: "absolute" }} >
                            <div style={{ marginTop: "25px" }}>
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="Nome" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="E-mail" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="Telefone" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="Setor" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "300px", marginLeft: "2px", marginTop: "9px" }} label="Linkedin" variant="outlined" size="small" onKeyPress={(event) => (event.key === "Enter") ? setVisibility2("block") : null} />
                            </div>
                            <div style={{ marginTop: "15px", display: `${visibility2}` }}>
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="Nome" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="E-mail" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="Telefone" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px", marginTop: "9px" }} label="Setor" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "300px", marginLeft: "2px", marginTop: "9px" }} label="Linkedin" variant="outlined" size="small" onKeyPress={(event) => (event.key === "Enter") ? setVisibility3("block") : null} />
                            </div>
                            <div style={{ marginTop: "15px", display: `${visibility3}` }}>
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="Nome" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="E-mail" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="Telefone" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px", marginTop: "9px" }} label="Setor" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "300px", marginLeft: "2px", marginTop: "9px" }} label="Linkedin" variant="outlined" size="small" onKeyPress={(event) => (event.key === "Enter") ? setVisibility4("block") : null} />
                            </div>
                            <div style={{ marginTop: "15px", display: `${visibility4}` }}>
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="Nome" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="E-mail" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px" }} label="Telefone" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "150px", marginLeft: "2px", marginTop: "9px" }} label="Setor" variant="outlined" size="small" />
                                <TextField id="outlined-basic" fullWidth="true" style={{ width: "300px", marginLeft: "2px", marginTop: "9px" }} label="Linkedin" variant="outlined" size="small" />
                            </div>
                        </div>

                    </div>
                </div >




            </Modal>
        </div >
    );
}