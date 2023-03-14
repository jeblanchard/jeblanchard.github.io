import {useState} from 'react';
import React from 'react';

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    function handleClick() {
        setIsLiked(!isLiked)
    }

    let buttonText
    if (isLiked) {
        buttonText = "Unlike Me"
    } else {
        buttonText = "Like me"
    }

    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    )
}
