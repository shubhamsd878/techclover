"use client";
import React, { useState } from 'react'
import './style.scss'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, such as sending the data to a server or displaying a confirmation message.
    };

    return (
        <div className='container firstpage'>
            <h1 className='mt-5 text-gradient'>We'd love to hear from you</h1>
            <hr className='mt-5' />

            <div class="d-flex justify-content-center align-items-center">
                <div class="contact-item text-center p-4">
                    <img src="https://techclover.sg/wp-content/uploads/2023/08/call.png" alt="Call Icon" />
                    <h5 class="textcolorgreen-ov text-size1">Call</h5>
                    <h6 class="textcolorgreen-ov-p"><a class="tdnone" href="#" target="_blank">+65 8207 7039</a></h6>
                </div>

                <div class="contact-item text-center p-4">
                    <img src="https://techclover.sg/wp-content/uploads/2023/08/email.png" alt="Email Icon" />
                    <h5 class="textcolorgreen-ov text-size1">Email</h5>
                    <h6 class="textcolorgreen-ov-p"><a class="tdnone" href="#" target="_blank">hello@TechClover.sg</a></h6>
                </div>

                <div class="contact-item text-center p-4">
                    <img src="https://techclover.sg/wp-content/uploads/2023/08/linkedin.png" alt="LinkedIn Icon" />
                    <h5 class="textcolorgreen-ov text-size1">Connect</h5>
                    <h6 class="textcolorgreen-ov-p"><a class="tdnone" href="https://www.linkedin.com/in/sapnaoberai/" target="_blank">www.linkedin.com/in/sapnaoberai/</a></h6>
                </div>

                <div class="contact-item text-center p-4">
                    <img src="https://techclover.sg/wp-content/uploads/2023/08/techclover-profile.png" alt="TechClover Icon" />
                    <h5 class="textcolorgreen-ov text-size1">Follow</h5>
                    <h6 class="textcolorgreen-ov-p"><a class="tdnone" href="https://www.linkedin.com/company/www.techclover.sg/about/" target="_blank">TechClover Linkedin profile</a></h6>
                </div>
            </div>

            <div className='contactus-form mt-5'>
                <h3>Get in touch by <span className='contact-heading-highlighted'>Today</span></h3>
                
                <form className='mt-3' id="signUpForm" >
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <input class="form-control me-2 float-left" type="text" required="" name="name" id="name" placeholder="Name" />
                        {/* <input class="form-control me-2 " type="text" required="" id="lastname" name="last_name" placeholder="Last Name" /> */}
                        <select class="form-select me-2 form-select-sm" name="TypeofEnquiry">
                            <option value="Type of Enquiry" selected>Type of Enquiry</option>
                            <option value="I am looking for new opportunity">I am looking for new opportunity</option>
                            <option value="I am looking for candidates">I am looking for candidates</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <input class="form-control me-2" required="" type="tel" name="cpassword" id="cpassword" placeholder="Email" aria-label="password" />
                        <input class="form-control me-2 float-left  " type="email" required="" id="password" name="password" placeholder="Phone No." aria-label="password" />
                    </div>
                    <textarea class="form-control mt-1 me-2 " rows="5" type="text" required="" name="message" placeholder="How can I help?" />
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button class="btn btn-outline-success" >Contact Me</button>
                    </div>
                </form>
            </div>
            

        </div>
    )
}

export default Contact