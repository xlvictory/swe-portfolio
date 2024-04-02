import React from "react";
import '../App.css';
import '../../public/landinggif.gif';
import Enter from "./button components/Enter";
import SeeProjects from "./button components/SeeProjects";

export default function LandingPage() {

    return (
        <>
            <div id="greeting">
                <h1><b><span>He</span><span>llo</span>⋆<span>*`</span></b></h1>
            </div>
            <div id='landing-gif'>
                <img src='/landinggif.gif' />
            </div>
            <div id='buttons-container'>
                <Enter /> <SeeProjects />
            </div>
        </>
    )
}