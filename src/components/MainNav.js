import React, { useEffect } from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const Navigate = useNavigate()

    useEffect(() => {
        if (value === 0) Navigate("/")
        else if (value === 1) Navigate("/movies")
        else if (value === 2) Navigate("/series")
        else if (value === 3) Navigate("/search")
    }, [value, Navigate]);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            style={{ backgroundColor: '#0A192F' }}
        >
            <BottomNavigationAction
                style={{ color: "#FFAE42" }}
                label="Trending"
                icon={<WhatshotIcon />}
            />

            <BottomNavigationAction
                style={{ color: "#FFAE42" }}
                label="Movies"
                icon={<MovieIcon />}
            />
            <BottomNavigationAction style={{ color: "#FFAE42" }}
                label="TV Series"
                icon={<TvIcon />}
            />
            <BottomNavigationAction style={{ color: "#FFAE42" }}
                label="Search"
                icon={<SearchIcon />}
            />
        </BottomNavigation>
    );
}