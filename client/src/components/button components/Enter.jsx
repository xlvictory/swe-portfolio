import React from "react";
import { useNavigate } from "react-router";

export default function Enter() {
    const navigate = useNavigate();
    function clickMe() {
        navigate('/about');
    }
    return (
        <>
                <button type='button' onClick={clickMe}>↪ More About Me</button>
        </>
    )
}