import React, {useEffect} from 'react';
import '../css/Header.css';
import {Avatar, IconButton} from "@material-ui/core";

import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {

    useEffect(() => {
        document.title = "Facebook";
    });

    return (
        <div className="header">

            <div className="header__left">
                <img alt="fb-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"/>
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <OndemandVideoIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SportsEsportsIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src="https://scontent.fyhz1-1.fna.fbcdn.net/v/t1.0-9/69331413_2530402660316090_1814845070944239616_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=t1w16wvc-_AAX_g4Obi&_nc_ht=scontent.fyhz1-1.fna&oh=f69b0c81f9a8a74aa2580e06a40b7a3a&oe=5F7E8778"/>
                    <h4>Deep</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ChatRoundedIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
            </div>

        </div>
    );
};

export default Header;
