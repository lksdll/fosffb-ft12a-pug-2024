import '../App.css';
import React, { useState, useEffect } from 'react';
import Link from 'react-router-dom';

function Error() {

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const message = 'Da muss wohl etwas schief gelaufen sein...';

    useEffect(() => {
        const interval = setInterval(() => {
            setText((prevText) => prevText + message.charAt(index));
            setIndex((prevIndex) => prevIndex + 1);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [index, message]);

    return (
        <>
            <div className='h-screen w-screen flex flex-col justify-center items-center gap-4'>
                <div className='text-red-600 text-5xl font-black select-none'>ERROR</div>
                <div className='text-md select-none'>{text}</div>
                <Link to="/" className='bg-blue-500 p-1 rounded-md text-white select-none'>Zurück zur Startseite</Link>
            </div>
        </>
    );
}

export default Error;