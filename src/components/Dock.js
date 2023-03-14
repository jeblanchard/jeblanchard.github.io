import React from 'react'
import {useEffect, useRef} from "react";
import ButtonBar from "./ButtonBar";
import createSpinningShape from "./createSpinningShape";

export default function Dock() {
    const spinningShapeRef = useRef(null);

    useEffect(() => {
        createSpinningShape(spinningShapeRef.current)
    }, [])


    return (
        <div className="dock">
            <canvas id="spinning-shape" ref={spinningShapeRef}></canvas>
            <div className="button-bar">
                <ButtonBar/>
            </div>
        </div>
    )
}
