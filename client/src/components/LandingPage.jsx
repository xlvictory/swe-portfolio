import React from "react";
import '../../public/landinggif.gif';
import '../../public/welcome.gif'
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