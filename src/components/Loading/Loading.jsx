import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            <div className='container mx-auto text-center p-5'>
                <span className="loading loading-bars loading-lg text-success"></span>
            </div>
        </div>
    );
};

export default Loading;