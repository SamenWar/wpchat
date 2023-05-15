import React from 'react';

interface VideoProps {
    videoId: string;
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
    return (
        <div className="content">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default Video;
