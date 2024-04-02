import React, { useState, useEffect } from 'react';

const TypeWriterText = ({ inputText }) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const message = inputText;

    useEffect(() => {
        const interval = setInterval(() => {
            if (message) {
                setText((prevText) => prevText + message.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [index, message]);

    return (
        <>{text}</>
    );
}

export default TypeWriterText;