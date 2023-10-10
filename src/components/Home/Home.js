"use client";
import React from 'react'
import './style.scss'
import Typed from 'react-typed';
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className='home'>
        <div className='firstPage'>
          <img className='leftBannerImg' src='/images/banner-img-client.jpg' />
          <div className='rightHeading'>
            <h1 className='typedHeading'>Hi !</h1>
            <h1 className='typed-text mt-4'>
              We &nbsp;
              <span className='typed-string'>
                <Typed strings={["Innovate Talent!", "Fuel Tech Growth!"]} typeSpeed={150} backSpeed={150} loop />
              </span>
            </h1>
            <p className='typed-paragraph mt-3'>
              {/* Welcome to [Your Company Name], where innovation meets talent. We specialize in partnering with emerging Tech companies on their journey to growth and differentiation. Our mission is clear: to find and connect you with the right talent, those exceptional individuals who will drive your company's success. With our High-Performance Recruitment and Executive Search services, we bring unparalleled expertise to the table. Let us help you shape the future of your organization. */}
              We are a boutique High-Performance recruitment, and an executive search firm helping emerging Tech companies grow and differentiate, by connecting them with the right talent!!
              <br />
              <br />
              At Techclover, we're your dedicated partners in tech talent acquisition and growth. Our services include:
              <ul>
                <li>Expertise in tech talent acquisition, fostering success in emerging companies.</li>
                <li>Tailored solutions for your unique staffing needs, driving your organization's transformation.</li>
                <li>Partner with us to shape the future of your tech venture.</li>
                <li>We excel in connecting you with exceptional talent that drives innovation.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className='secondPage container mt-5 d-flex justify-content-between' >

          {/* <h1 className='heading text-gradient ms-5 mt-5' >Why Us ?</h1> */}
          <div className='ms-5 mt-5'>
            <h1 className='heading text-gradient' >Who we Are?</h1>
            <h6 className='mt-5'>- Your Premier Tech Talent Partner!</h6>
            <p className='text-muted'>With deep expertise in FinTech, InsureTech, HealthTech, and MarTech, TechClover delivers a meticulously curated approach to talent acquisition.</p>

            <h6 className='mt-5'>- Discover TechClover:</h6>
            <p className='text-muted'>At TechClover, our unwavering commitment is to empower startups and mid-sized firms on their journey to remarkable success.</p>
          </div>
          <img className='techTalentImg' src='/images/tech-talent.png' />
        </div>

        <div className='thirdPage container'>
          <h1 className='heading text-gradient' >What makes us Unique?</h1>
          <div className='d-flex justify-content-around space-between mt-4'>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
          </div>
        </div>

        <div className='fourthPage container'>
          <h1 className='heading text-gradient' >Experts in Technology</h1>
          <p className='mt-4 m-5 text-center'>TechClover stands at the forefront, providing an unparalleled perspective on mastering success in the global tech battleground. Proudly woman-led, our core pursuit is unearthing exceptional talent spanning four crucial digital domains, each resonating with distinct expertise.</p>
          <div className='d-flex mx-5 justify-content-around space-between mt-4'>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
          </div>
        </div>

        {/* <div className='fifthPage container'>
          <h1 className='heading text-gradient' >Your Partner for a successful Future</h1>
          
        </div> */}

        {/* <div class="fifthPage container">
          <h1 class="heading text-gradient">Your Partner for a Successful Future</h1>
          <div class="vision-mission">
            <div class="vision">
              <img src="vision-image.jpg" alt="Vision Image" />
                <h2>Our Vision</h2>
                <p>At TechClover, we envision a vibrant Tech Ecosystem where Talent Thrives, and Businesses Flourish.</p>
            </div>
            <div class="mission">
              <img src="mission-image.jpg" alt="Mission Image" />
                <h2>Our Mission</h2>
                <p>We are driven by a People-First Approach, dedicated to connecting the brightest tech talent with aspiring businesses. Our goal is to foster a symbiotic relationship where both talent and companies can achieve unparalleled success.</p>
            </div>
          </div>
        </div> */}

        {/* <div class="fifthPage container">
  <h1 class="heading text-gradient">Your Partner for a Successful Future</h1>
  <div class="vision-mission">
    <div class="card">
      <img src="vision-image.jpg" alt="Vision Image" />
      <h2>Our Vision</h2>
      <p>At TechClover, we envision a vibrant Tech Ecosystem where Talent Thrives, and Businesses Flourish.</p>
    </div>
    <div class="card">
      <img src="mission-image.jpg" alt="Mission Image" />
      <h2>Our Mission</h2>
      <p>We are driven by a People-First Approach, dedicated to connecting the brightest tech talent with aspiring businesses. Our goal is to foster a symbiotic relationship where both talent and companies can achieve unparalleled success.</p>
    </div>
  </div>
</div> */}

        <div class="fifthPage container">
          <h1 class="heading text-gradient">Your Partner for a Successful Future</h1>
          <div class="vision-mission">
            <div class="card">
              <img src="vision-image.jpg" alt="Vision Image" />
              <h2>Our Vision</h2>
              <p>At TechClover, we envision a vibrant Tech Ecosystem where Talent Thrives, and Businesses Flourish.</p>
            </div>
            <div class="card">
              <img src="mission-image.jpg" alt="Mission Image" />
              <h2>Our Mission</h2>
              <p>We are driven by a People-First Approach, dedicated to connecting the brightest tech talent with aspiring businesses. Our goal is to foster a symbiotic relationship where both talent and companies can achieve unparalleled success.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home