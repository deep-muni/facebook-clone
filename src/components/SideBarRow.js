import React from 'react';
import Avatar from "@material-ui/core/Avatar";

const SideBarRow = ({ src, Icon, title }) => {
    return (
        <div className="side-bar-row">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4 className="side-bar-row__title">{title}</h4>
        </div>
    );
};

export default SideBarRow;
