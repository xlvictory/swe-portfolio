import React from "react";
import { useNavigate } from "react-router";

export default function SeeProjects() {
    const navigate = useNavigate();
    function clickMe2() {
        navigate('/projects');
    }
    return (
        <>
                <button type='button' id="project-button" onClick={clickMe2}>↪ My Projects</button>
        </>
    )
}