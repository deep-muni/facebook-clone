import React from 'react';
import '../css/Feed.css';
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {

    const posts = [
        {
            key: '1',
            profilePic: 'https://scontent.fyhz1-1.fna.fbcdn.net/v/t1.0-9/69331413_2530402660316090_1814845070944239616_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=t1w16wvc-_AAX_g4Obi&_nc_ht=scontent.fyhz1-1.fna&oh=f69b0c81f9a8a74aa2580e06a40b7a3a&oe=5F7E8778',
            username: 'Deep Muni',
            timestamp: '04-06-1994',
            message: "This is my facebook clone!!!"
        },
        {
            key: '2',
            profilePic: 'https://scontent.fyhz1-1.fna.fbcdn.net/v/t1.0-9/69331413_2530402660316090_1814845070944239616_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=t1w16wvc-_AAX_g4Obi&_nc_ht=scontent.fyhz1-1.fna&oh=f69b0c81f9a8a74aa2580e06a40b7a3a&oe=5F7E8778',
            image: 'https://i.pinimg.com/originals/65/ea/3b/65ea3ba59879f8634a96b2971d6d0f4b.jpg',
            username: 'Deep Muni',
            timestamp: '04-06-1994',
            message: "That's what she said!!!"
        },
        {
            key: '3',
            profilePic: 'https://scontent.fyhz1-1.fna.fbcdn.net/v/t1.0-9/69331413_2530402660316090_1814845070944239616_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=t1w16wvc-_AAX_g4Obi&_nc_ht=scontent.fyhz1-1.fna&oh=f69b0c81f9a8a74aa2580e06a40b7a3a&oe=5F7E8778',
            image: 'https://greenandgold.wesleyanschool.org/wp-content/uploads/2016/11/friends.jpg',
            username: 'Deep Muni',
            timestamp: '04-06-1994',
            message: "I'll be there for you!!!"
        },
        {
            key: '4',
            profilePic: 'https://scontent.fyhz1-1.fna.fbcdn.net/v/t1.0-9/69331413_2530402660316090_1814845070944239616_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=t1w16wvc-_AAX_g4Obi&_nc_ht=scontent.fyhz1-1.fna&oh=f69b0c81f9a8a74aa2580e06a40b7a3a&oe=5F7E8778',
            image: 'https://img.favpng.com/8/1/9/sheldon-cooper-bernadette-rostenkowski-television-show-actor-the-big-bang-theory-png-favpng-d2TMf3MfgK4h7LeX6qu6xe6JU.jpg',
            username: 'Deep Muni',
            timestamp: '04-06-1994',
            message: "Bazinga!!!"
        }
    ];

    return (
        <div className="feed">
        <StoryReel/>
        <MessageSender/>
        {
            posts.map((post) =>{
               return(
                   <Post
                        key={post.key}
                        profilePic={post.profilePic}
                        image={post.image}
                        username={post.username}
                        timestamp={post.timestamp}
                        message={post.message}
                   />
               )
            })
        }
        </div>
    );
};

export default Feed;
