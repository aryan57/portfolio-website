import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import ResumePdf from './static/RESUME.pdf';

export default function Header() {

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Aryan Agarwal</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
						</Nav>
						<Nav>
							<Nav.Link href={ResumePdf} target = "_blank">Resume</Nav.Link>
							<Nav.Link href="/contact">Contact Me</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}