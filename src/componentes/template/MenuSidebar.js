import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Tooltip from '@material-ui/core/Tooltip';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import Logout from '../Logout';
import { Link } from "react-router-dom";
import logo_pequeno from '../../images/logo_pequeno.png'



const drawerWidth = 80;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    drawerPaper: {
        width: drawerWidth,
        boxShadow: '-5px 5px 14px rgba(108, 111, 114, 0.45)',
        backgroundColor: 'black'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        justifyContent: 'flex-end',
        minHeight: "10px",
        backgroundColor: 'black',

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,


    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    ListItem: {
        height: "65px",
        alignItems: 'center',
        minWidth: '35px',
        "&:hover, &:focus": {
            backgroundColor: 'gray',
            position: 'relative',
            top: '3px',
            left: '3px',
            borderColor: '#000 #999 #999 #000',
        }

    },
    Icon: {
        color: 'white',
        height: '50px',
        width: '50px',
        "&:hover, &:focus": {
            backgroundColor: '#00d142',
            borderRadius: '70px',
        }


    },
    ListItemText: {
        fontSize: "5px",
        color: "white",
        fontFamily: "Arial",
        textShadow: "1px 1px 1px #fff",
        paddingLeft: "3px",
    },
    Children: {
        marginTop: "25px",
        marginLeft: "56px",
        marginRight: "100px",
        width: "100%",
        position: "fixed",
    }

}));




const MenuSideBar = (props) => {


    const { children, user, logout, title } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar
                    style={{ minHeight: "10px", backgroundColor: '#00d142' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <img src={logo_pequeno}
                        alt="Flowers in Chania"
                        width="120"
                        height="47" />
                    <Typography variant="h6" align="center" style={{ width: "90%" }}>
                        {title}
                    </Typography>
                    <Logout logout={logout} />
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                elevation='5'
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <img></img>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: 'white' }} /> : <ChevronRightIcon style={{ color: 'white' }} />}
                    </IconButton>
                </div>

                <List style={{ marginTop: '10px', minWidth: '30px' }}>
                    <Tooltip title="Contatos" placement="right">
                        <ListItem button className={classes.ListItem} component={Link} to="/contato">
                            <ListItemIcon style={{ minWidth: '30px' }}>
                                <PersonRoundedIcon className={classes.Icon} fontSize="large" />
                            </ListItemIcon>
                        </ListItem>
                    </Tooltip>
                    <Tooltip title="Tarefas" placement="right">
                        <ListItem button className={classes.ListItem} component={Link} to="/tarefa">
                            <ListItemIcon >
                                <BookmarkBorderOutlinedIcon className={classes.Icon} fontSize="small" />
                            </ListItemIcon>
                        </ListItem>
                    </Tooltip>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>
                <div className={classes.Children}>{children}</div>
            </main>
        </div >
    );
}

export default MenuSideBar