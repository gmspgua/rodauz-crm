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
import ListItemText from '@material-ui/core/ListItemText';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';



const drawerWidth = 180;

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
        backgroundImage: 'linear-gradient(to right, #06044a 0%, #14126e 51%, #06044a 100%)',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        justifyContent: 'flex-end',
        minHeight: "10px",
        backgroundColor: '#3f51b5',

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
        height: "35px",
        "&:hover, &:focus": {
            backgroundColor: '#3f51b5',
            boxShadow: '-10px 10px 14px rgba(108, 111, 114, 0.45)',

        }
    },
    ListItemText: {
        fontSize: "5px",
        color: "white",
        fontFamily: "Arial",
        textShadow: "1px 1px 1px #fff",
        padding: "20px",
        paddingLeft: "3px",
    }
}));

const MenuSideBar = (props) => {

    const { children, email } = props;
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
                    style={{ minHeight: "10px" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h20" noWrap>
                        {email}
                    </Typography>
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
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <List>
                    <ListItem button className={classes.ListItem}>
                        <ListItemIcon ><PersonRoundedIcon style={{ color: 'white' }} /></ListItemIcon>
                        <ListItemText primary="Pessoa" className={classes.ListItemText} />
                    </ListItem>
                    <ListItem button className={classes.ListItem}>
                        <ListItemIcon ><LocalOfferRoundedIcon style={{ color: 'white' }} /></ListItemIcon>
                        <ListItemText primary="Produto" className={classes.ListItemText} />
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>
                <div style={{ marginTop: "30px", marginLeft: "200px" }}>{children}</div>
            </main>
        </div>
    );
}

export default MenuSideBar