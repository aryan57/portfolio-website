import React from "react"
import { Container } from 'react-bootstrap'


export default function Contact() {
	return (
		<div>
			<Container className="d-flex align-items-center justify-content-center" >
				<div className="w-100" style={{ maxWidth: "450px", marginTop: 50 }}>
					<ui>
						<li>Email: <a href="mailto:aryanag65@gmail.com">aryanag65@gmail.com</a></li>
						<li>Phone: <a href="tel:+91-8529631557">+91-8529631557</a></li>
					</ui>
					<br />
					<ui>
						<li><a href={process.env.REACT_APP_LINK_FACEBOOK}>Facebook</a></li>
						<li><a href={process.env.REACT_APP_LINK_INSTAGRAM}>Instagram</a></li>
						<li><a href={process.env.REACT_APP_LINK_TWITTER}>Twitter</a></li>
						<li><a href={process.env.REACT_APP_LINK_GITHUB}>Github</a></li>
						<li><a href={process.env.REACT_APP_LINK_LINKEDIN}>Linkedin</a></li>
					</ui>
				</div>
			</Container>
		</div>
	)
}
