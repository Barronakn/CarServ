import React from 'react';

const Top = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
        })
    }

    return (
        <div onClick={handleScroll} className='bg-red-600 rounded-sm w-12 h-12 fixed right-10 bottom-20 cursor-pointer'></div>
    );
};

export default Top;
