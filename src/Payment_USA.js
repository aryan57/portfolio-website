import {React,useEffect} from "react"
import { Container } from 'react-bootstrap'
import config from './config.json'


export default function Payment_USA() {
	useEffect(() => {
		const Script = document.createElement("script");
		const Form = document.getElementById('payForm');
		Script.setAttribute('src', 'https://checkout.razorpay.com/v1/payment-button.js')
		Script.setAttribute('data-payment_button_id', config.RAZORPAY_PAY_BUTTON_ID_USA)
		Form.appendChild(Script);
	}, [])

	return (
		<div>
			<Container className="d-flex align-items-center justify-content-center" >
				<div className="w-100 " style={{ maxWidth: "450px", marginTop: 50 }}>
					<form id='payForm'> </form>
				</div>
			</Container>
		</div>
	)
}
