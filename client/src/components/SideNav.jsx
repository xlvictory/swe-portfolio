import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SideNav() {
const { collapseSidebar } = useProSidebar();

    return (
        <>
<div style={{ display: "flex", height: "240px", flexDirection: "row-reverse", width: "20px"}}>
        <Sidebar className='sidenav' defaultCollapsed={false}>
            <Menu>
             <MenuItem onClick={() => {
                collapseSidebar();
             }} icon={<img style={{height: "90px", width: "90px"}} src='/xvlogo.png'/>} style={{ height: "90px", background: "#000000"}}></MenuItem>
              <MenuItem component={<Link to='/about' />} style={{ background: "#303030", }} icon={<img src="/abouticon.GIF" alt="About Me" />}>about</MenuItem>
              <MenuItem component={<Link to='/projects' />} style={{ background: "#000000"}} icon={<img src="/projecticon.GIF" alt="My Projects" />}>projects</MenuItem>
              <MenuItem component={<Link to='/contact' />} style={{ background: "#303030"}} icon={<img src="/contacticon.GIF" alt="Contact Me" />}>contact</MenuItem>
            </Menu>
        </Sidebar>
      </div>
    </>
    )
}