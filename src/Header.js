import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import config from "./config.json"

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
							<Nav.Link href="/">About Me</Nav.Link>
							<Nav.Link href={config.URL_RESUME}>Resume</Nav.Link>
							<Nav.Link href="/contact">Contact Me</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}
