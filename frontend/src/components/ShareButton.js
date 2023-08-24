import React from 'react';

function ShareButton({url}) {
    const handleShare = async () => {
    if (navigator.share) {
        try {
            await navigator.share({
            title: 'My DJ Room',
            text: 'Check out this link!',
            url: `url`, 
            });
        } catch (error) {
                console.error('Error sharing:', error);
            }   
    }
    };

    return (
        <button onClick={handleShare}>
            Share
        </button>
    );
}

export default ShareButton;