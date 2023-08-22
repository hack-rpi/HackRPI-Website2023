import React from 'react';

const ProgressBar = ({ circleWidth, number, units}) => {
    var percentage = 0;
    if (units == "Days"){percentage = Math.floor((number/365) * 100)}
    else if (units == "Hours"){percentage = Math.floor((number/24) * 100)}
    else if (units == "Minutes"){percentage = Math.floor((number/60) * 100)}
    else if (units == "Seconds"){percentage = Math.floor((number/60) * 100)}
    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray* percentage)/100;
    return(
        <div>
            <svg
                width = {circleWidth}
                height = {circleWidth}
                viewBox = {'0 0 $(circleWidth} ${circleWidth}'}
            >
                <defs>
                    <linearGradient id = "gradient">
                        <stop offset="10%" stop-color="#191919"/>
                        <stop offset="50%" stop-color="#910307"/>
                        <stop offset="100%" stop-color="#db4941"/>
                    </linearGradient>
                </defs>
                <circle
                    cx = {circleWidth / 2}
                    cy = {circleWidth / 2}
                    strokeWidth = "15px"
                    r = {radius}
                    className = "circle-background"
                />
                
                <circle
                    cx = {circleWidth / 2}
                    cy = {circleWidth / 2}
                    strokeWidth = "15px"
                    r = {radius}
                    className = "circle-progress"
                    style = {{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                    }}
                    transform={'rotate(-90 ${circleWidth / 2} ${circleWidth / 2})'}
                    stroke = "url(#gradient)"
                />
                <text x = "50%" y = "50%" dy= "0.3em" textAnchor='middle' classname = "circle-text">
                    {number}
                </text>
            </svg>      
        </div>
    );
};

export default ProgressBar;