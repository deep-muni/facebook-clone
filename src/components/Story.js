import React from 'react';
import '../css/Story.css';
import Avatar from "@material-ui/core/Avatar";

const Story = ({ image, profile, title}) => {
    return (
        <div className="story" style={{backgroundImage: `url(${image})`}}>
            <Avatar src={profile}/>
            <h4>{title}</h4>
        </div>
    );
};

export default Story;
