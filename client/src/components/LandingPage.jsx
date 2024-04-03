import React from "react";
import Enter from "./button components/Enter";

export default function LandingPage() {

    return (
        <>
        <div id='welcome'>
            <img src='/welcome.gif' />
        </div>
            <div id='landing-gif'>
                <img src='/landinggif.gif' />
            </div>
            <div id='buttons-container'>
                <Enter />
            </div>
        </>
    )
}