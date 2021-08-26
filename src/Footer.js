import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { alignPropType } from "react-bootstrap/esm/DropdownMenu"

export default function Footer() {

	return (
		<div classname="footer navbar-fixed-bottom" style={{textAlign:"center",paddingTop:"50px"}}>
			<p> &copy; {new Date().getFullYear()} Aryan Agarwal</p>
		</div>
	)
}