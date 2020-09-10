import React from 'react';
import '../css/StoryReel.css';
import Story from "./Story";

const StoryReel = () => {
    return (
        <div className="story-reel">
            <Story
                image="https://wallpapercave.com/wp/wp4868478.png"
                profile="https://dvdbash.files.wordpress.com/2015/11/sherlock-tv-series-season-1-benedict-cumberbatch-holmes-martin-freeman-dr-watson-dvdbash-018.jpg"
                title="Sherlock Holmes"
            />
            <Story
                image="https://wallpaperaccess.com/full/1183272.jpg"
                profile="https://64.media.tumblr.com/8a08f55dba78a2eddc3864e3240a0879/tumblr_pbz878eGyb1w2bgl4o1_250.jpg"
                title="Tony Stark"
            />
            <Story
                image="https://media.gettyimages.com/photos/bollywood-actor-sushant-singh-rajput-during-an-interview-on-may-25-picture-id969795302?s=2048x2048"
                profile="https://wallpapercave.com/wp/wp4645254.jpg"
                title="Sushant Singh Rajput"
            />
            <Story
                image="https://wallpapercave.com/wp/wp4310874.jpg"
                profile="https://wallpapercave.com/wp/wp1821481.jpg"
                title="Steve Rogers"
            />
        </div>
    );
};

export default StoryReel;
