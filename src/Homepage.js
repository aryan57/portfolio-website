import React from "react"

import { Container } from 'react-bootstrap'


export default function Homepage() {
	return (
		<div>
			<Container className="d-flex align-items-center justify-content-center" >
				<div className="w-100" style={{ maxWidth: "450px", marginTop: 50 }}>

					<h3>
						About Me
					</h3>
					Hi! I am Aryan, an undergrad at Indian Institute of Technology, Kharagpur currently completing a B.Tech+M.Tech major in Computer Science and Engineering. I like competetive programming and software development.
				</div>
			</Container>
		</div>
	)
}
