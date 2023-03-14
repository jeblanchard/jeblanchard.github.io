import React from 'react';

export default function GitHubLink() {
    return (
        <a
            className="github-link hvr-grow"
            href="https://github.com/jeblanchard"
            target="_blank"
        >
            <img
                className="github-img"
                src="./src/images/github-logo.svg"
                alt="GitHub Profile"
            />
        </a>
    )
}