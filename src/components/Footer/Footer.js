import React from 'react'
// import { Outlet, a } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, Faaedin } from 'react-icons/fa'
import './style.scss'

const Footer = () => {
    return (
        <footer>
                <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h4>Contact Us</h4>
                        <ul class="list-unstyled">
                            <li>Phone: +65 8207 7039</li>
                            <li>Email: hello@techclover.sg</li>
                            <li>168 Robinson Road, #20-01, <br /> Capital Tower, <br />Singapore 068912</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h4>Navigation</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Market And Roles</a></li>
                            <li><a href="#">Service Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h4>Follow Us</h4>
                        <ul class="list-inline">
                            <li className='me-4'><a href="#"> <FaFacebook size={25} /> </a></li>
                            <li className='me-4'><a href="#"> <FaTwitter size={25} /> </a></li>
                            <li className='me-4'><a href="#"> <FaInstagram size={25} /> </a></li>
                            {/* <li className='me-4'><a href="#"> <Faaedin size={25}/> </a></li> */}
                        </ul>
                    </div>
                </div>
                <hr />
                <div class="row footer-bottom">
                    <div class="col-md-6">
                        <p>&copy; 2023 Forms World Pvt. Ltd. All Rights Reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <ul class="list-inline">
                            {/* <li><a href="/privacy">Privacy Policy</a></li> */}
                            {/* <li><a href="/terms">Terms of Use</a></li> */}
                            <li><a href="#Welcome">Welcome Page</a></li>
                            <li><a href="#why-us">Why Us</a></li>
                            <li><a href="#social-reviews">Site Map</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
        </div>
            </footer>
    )
}

export default Footer