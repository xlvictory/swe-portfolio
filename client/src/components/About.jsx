import React from "react";
import SideNav from "./SideNav";
import SeeProjects from './button components/SeeProjects';

export default function About() {
    return (
        <>
        {/* The Upper Portion of the webpage */}
    <div id='header'>
      <div id="greeting">
           <h1><b><span>About</span><span> M</span>e⋆<span>*`</span></b></h1>
      </div>                   
       <div id='sidebar'><SideNav /></div>
    </div>

        {/* The section featuring my photo and information */}
        <div id='profile'>
            <div>
                <img src="/xolani.png" alt="a photo of Xolani Victory on a galaxy background" style={{ height: "600px", marginTop: "50px", marginLeft: "20px" }} /> <br/>
                
                <p style={{ textAlign: "center" }}> they/she</p>
                <p style={{ textAlign: "center" }}> based in michigan, usa</p>
            </div>
            <div id='aboutblurb'>
                <h2>Well, Hello There... </h2>
                <p> Pleasure to meet you!! I'm Xolani (pronounced ZOH-LAH-nee), a full stack software engineer with a keen aesthetic eye and a love for web design. At 8 years old, I discovered my passion for not only art, activism and science, but programming as well. I self-taught myself HTML & CSS, and have been building HTML pages and Tumblr themes since my preteen years.</p>
                
                <p>As a recent alum of Fullstack Academy's Grace Hopper Program-- an immersive and rigorous coding bootcamp catered towards women and non-binary students-- I have attained skills that have helped develop my technical prowess. Now, I am able to build full static sites and web applications  (like this one!) utilizing Javascript, React and other tools/frameworks to make everything as pretty as I imagine them to be!!
                </p>
                <p>Building beautiful, interactive client-facing experiences makes me feel empowered, and having others resonate with my vision is the bee's knees. I'm inspired to change the world as a person with big dreams, an even bigger heart, and the power of software development on my side.</p>
                <p id='buttons-container'><SeeProjects /></p>
            </div>
        </div>
    {/* The section that holds all of my skills and such */}
        <section id="skills">
            <div></div>
        </section>
        </>
    )
}