import React from 'react';

const Content = ({ title, text, link }) => {
    return (
        <div className="content">
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={link}>{link}</a>
        </div>
    );
};

export default Content;
