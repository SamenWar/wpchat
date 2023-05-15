import React from 'react';

interface VideoProps {
    videoId: string;
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
    return (
        <div
            className="content"
            style={{
                backgroundImage: `url('img/image1.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
            </iframe>
        </div>
    );
};

export default Video;
