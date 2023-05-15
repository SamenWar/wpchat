import React from 'react';

const Video = ({ videoId }) => {
    return (
        <div className="content">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>
    );
};

export default Video;
