import React from "react";
import SideNav from "./SideNav";
import SeeProjects from './button components/SeeProjects';
import DownloadResume from "./button components/DownloadResume";

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
                
                <p style={{ textAlign: "center" }}> they/she <br/> based in michigan, usa</p>
                <p style={{ textAlign: "center" }}>
                    <a href="http://www.linkedin.com/in/xolanivictory">
                        <img src="/linkedin.png" style={{ height: "30px" }}/>
                    </a>
                    <a href="http://www.github.com/xlvictory"><img src="/github.png" style={{ height: "35px" }}/></a>
                </p>
            </div>
            <div id='aboutblurb'>
                <h1>Well, Hello There... </h1>
                <p> Pleasure to meet you!! I'm Xolani (pronounced ZOH-LAH-nee), a full stack software engineer with a keen aesthetic eye and a love for web design. At 8 years old, I discovered my passion for not only art, activism and science, but programming as well. I self-taught myself HTML & CSS, and have been building HTML pages and Tumblr themes since my preteen years.</p>
                
                <p>As a recent alum of Fullstack Academy's Grace Hopper Program-- an immersive and rigorous coding bootcamp catered towards women and non-binary students-- I have attained skills that have helped develop my technical prowess. Now, I am able to build complete static sites and web applications  (like this one!) utilizing Javascript, React and other tools/frameworks to make everything as pretty as I imagine them to be!!
                </p>
                <p>Building beautiful, interactive client-facing experiences makes me feel empowered, and having others resonate with my vision is the bee's knees. I'm inspired to change the world as a person with big dreams, an even bigger heart, and the power of software development on my side.</p>
            </div>
        </div>
    {/* The section that holds all of my skills and such */}
        <section id="skills">
            {/* list of technical/hard skills */}
            <div id="tech-skills">
                <h1>Technical Skills</h1>

                <h3>Programming Languages:</h3>
                <p>JavaScript (ES6+), SQL</p>
                <h3>Version Control:</h3>
                <p>Git</p>
                <h3>Frontend Development Tools:</h3>
                <p>React, Redux, HTML5, CSS3</p>
                <h3>Backend Development:</h3>
                <p>Node.js, Express</p>
                <h3>Frameworks/Libraries:</h3>
                <p>Tailwind CSS, Bootstrap, Pixi.js</p>
                <h3>Database:</h3>
                <p>PostgreSQL, SQL querying</p>
            </div><br />
            {/* list of pretty much all of my soft skills */}
            <div id="soft-skills">
                <h1>Soft Skills</h1>

                <ul>
                    <li>Problem-solving</li>
                    <li>Communication</li>
                    <li>Collaboration</li>
                    <li>Creativity</li> 
                    <li>Adaptability</li> 
                    <li>Team-building</li> 
                    <li>Conflict Resolution</li> 
                    <li>Diligence</li> 
                    <li>Initiative</li>
                    <li>Growth Mindset</li>
                    <li>Public Speaking</li> 
                    <li>Analytical thinking</li> 
                    <li>Time Management</li> 
                    <li>Punctuality</li> 
                    <li>Charisma/Persuasion</li>    
                </ul>              
            </div>
        </section>
        <div id="divider">
            <DownloadResume />
            <img src="/gifdivider.gif" />
            <SeeProjects /> 
            </div>
        {/* Comprehensive list of my hobbies and interests */}
        
        <div id='title'><h1>Hobbies/Interests</h1></div>
        <section id="hobbies">
            
            
            <div className="art">
                <h3>Art</h3>
            <ul>
                <li>Painting</li>
                <li>Makeup (Editorial & Natural)</li>
                <li>Drawing</li>
                <li>Sculpting</li>
                <li>Crafting</li>
                <li>Graphic Design</li>
                <li>Photography</li>
                <li>Performing Arts</li>
                <li>Creative Writing</li>
                <li>Reading</li>
                </ul>
            </div>

            <div className="music">
                <h3>Music</h3>

            <ul>
                <li>Singing</li>
                <li>Producing</li>
                <li>Karaoke</li>
                <li>Favorite Musical Genres</li>
                    <ul>
                        <li>Metal</li>
                        <li>Pop-Punk</li>
                        <li>Hard Rock</li>
                        <li>K-Pop</li>
                        <li>R&B</li>
                        <li>Classical</li>
                        <li>Pop</li>
                        <li>Dance/EDM</li>
                        <li>Hip-Hop</li>
                    </ul>
                <li>Playing Instruments</li>
                    <ul>
                        <li>Guitar</li>
                        <li>Piano</li>
                        <li>Flute</li>
                    </ul>
                </ul>
            </div>

            <div className="stem">
                <h3>STEM</h3>
            <ul>
                <li>Mathematics</li>
                    <ul>
                        <li>Algebra</li>
                        <li>Calculus I & II</li>
                    </ul>
                <li>Computer Programming</li>
                <li>Biology</li>
                <li>Physics</li>
                <li>Web Design</li>
                <li>Hacking</li>
                <li>Video Production/Editing</li>
            </ul>
            </div>

            <div className="other">
                <h3>Other</h3>
            <ul>
                <li>Baking</li>
                <li>Video Games</li>
                <li>Astrology</li>
                <li>Improv</li>
                <li>Trivia</li>
                <li>Yoga</li>
                <li>Journaling</li>
                <li>Trvaeling</li>
                <li>Badminton</li>
                <li>Ice skating</li>
                <li>Tarot</li>
                <li>Psychology</li>
                <li>Pinterest</li>
                <li>Crystals & Holistic Healing</li>
                <li>Anime</li>
                <li>Horror Movies</li>
            </ul>
            </div>
        </section>
        </>
    )
}