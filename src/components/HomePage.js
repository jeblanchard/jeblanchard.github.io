import React from 'react'
import ParticlesApp from "./ParticlesApp";
import Dock from "./Dock";

export default function HomePage() {
    return (
        <div className="home-page">
            <ParticlesApp/>
            <Dock/>
        </div>
    )
}