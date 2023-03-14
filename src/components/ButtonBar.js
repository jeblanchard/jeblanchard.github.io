import React from 'react';
import LinkedInLink from "./LinkedInLink";
import QB3Link from "./QB3Link";
import GitHubLink from "./GitHubLink";

export default function ButtonBar() {
    return (
        <div className="button-bar">
            <LinkedInLink/>
            <QB3Link/>
            <GitHubLink/>
        </div>
    )
}