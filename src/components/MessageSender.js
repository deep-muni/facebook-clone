import React, {useState} from 'react';
import '../css/MessageSender.css';
import Avatar from "@material-ui/core/Avatar";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';

const MessageSender = () => {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://scontent.fyhz1-1.fna.fbcdn.net/v/t1.0-9/69331413_2530402660316090_1814845070944239616_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=t1w16wvc-_AAX_g4Obi&_nc_ht=scontent.fyhz1-1.fna&oh=f69b0c81f9a8a74aa2580e06a40b7a3a&oe=5F7E8778"/>
                <form>
                    <input type="text"
                           placeholder="What's on your mind, Deep?"
                           value={input}
                           onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleSubmit} type="submit">Hidden Button</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: '#E42645'}} fontSize="large"/>
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: '#41B35D'}} fontSize="large"/>
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender__option">
                    <MoodIcon style={{color: '#EAB026'}} fontSize="large"/>
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    );
};

export default MessageSender;
