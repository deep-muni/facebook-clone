import React from 'react';
import '../css/Post.css';
import Avatar from "@material-ui/core/Avatar";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

const Post = ({ profilePic, image, username, timestamp, message}) => {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            {
                image && <div className="post__image">
                            <img src={image} alt=""/>
                        </div>
            }
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpAltOutlinedIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineRoundedIcon/>
                    <p>Comment</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
