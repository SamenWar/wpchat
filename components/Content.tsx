import React from 'react';


// Определение типов для пропсов
interface ContentProps {
    title: any;
    text: string;
    link: string;
}

const Content = ({ title, text, link }: ContentProps) => {
    return (
        <div className="content">
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={link}>{link}</a>
        </div>
    );
};

export default Content;
