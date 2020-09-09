import React from 'react';
import '../css/SideBar.css';
import SideBarRow from "./SideBarRow";

import SecurityIcon from '@material-ui/icons/Security';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

const SideBar = () => {
    return (
        <div className="sidebar">
            <SideBarRow src="https://scontent.fyhz1-1.fna.fbcdn.net/v/t1.0-9/69331413_2530402660316090_1814845070944239616_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=t1w16wvc-_AAX_g4Obi&_nc_ht=scontent.fyhz1-1.fna&oh=f69b0c81f9a8a74aa2580e06a40b7a3a&oe=5F7E8778" title="Deep Muni"/>
            <SideBarRow Icon={SecurityIcon} title="COVID-19 Information Center"/>
            <SideBarRow Icon={PeopleIcon} title="Friends"/>
            <SideBarRow Icon={SupervisedUserCircleIcon} title="Groups"/>
            <SideBarRow Icon={StorefrontIcon} title="Market Place"/>
            <SideBarRow Icon={OndemandVideoIcon} title="Videos"/>
        </div>
    );
};

export default SideBar;
