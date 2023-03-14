import React, {useState} from 'react';
import LikeButton from "./LikeButton";

export default function Button() {
    const [isPressed, setIsPressed] = useState(false);

    function handleClick() {
        setIsPressed(!isPressed)
    }

    let buttonText
    if (isPressed) {
        buttonText = "Un-Press Me"
    } else {
        buttonText = "Press me"
    }

    return (
        <button onClick={handleClick} className="button">
            {buttonText}
        </button>
    )
}
