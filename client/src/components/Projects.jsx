import React from "react";
import SideNav from "./SideNav";

export default function Projects() {
    return (
        <>
        {/* The Upper Portion of the webpage */}
        <div id='header'>
            <div id="greeting">
                <h1><b>Tech<span>nic</span><span>al Pro</span><span>jec</span>ts⋆<span>*`</span></b></h1>
            </div>                   
            <div id='sidebar'><SideNav /></div>
        </div>
            <div id="greeting">
                <h1><b><span>Art</span>ist<span>ic</span><span> Pro</span>jects⋆<span>*`</span></b></h1>

            </div>

        </>
    )
}