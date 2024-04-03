import React from "react";
import SideNav from "./SideNav";

export default function Contact() {
	return (
		<>
        {/* The Upper Portion of the webpage */}
			<div id="header">
				<div id="greeting">
					<h1>
						<b>
							Cont<span>ac</span>
							<span>t M</span>
							<span>e</span>⋆<span>*`</span>
						</b>
					</h1>
				</div>
				<div id="sidebar">
					<SideNav />
				</div>
			</div>
		</>
	);
}
