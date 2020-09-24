import React from 'react';
import '../css/Widgets.css';

const Widgets = () => {
    return (
        <div className="widget">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSushantSinghRajput&tabs=timeline&width=300&height=2000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="300" height="100%"
                style={{border: 'none', overflow: 'hidden'}}
                scrolling="yes" frameBorder="0"
                allow="encrypted-media"
            />
        </div>
    );
};

export default Widgets;
