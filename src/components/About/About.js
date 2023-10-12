import React from 'react'
import './style.scss'

const About = () => {
    return (
        <>
        <div className='container'>
            <div className='firstPage d-flex justify-content-around align-items-center mt-5'>
                <h1 className='heading'>Meet Our Founder & Director: <br /> <span className='text-bold'>Sapna Oberai</span></h1>
                <img className='rightAboutImg' src='/images/about-img-client.png' />
            </div>
            <p className='about-text-content mt-5 '>
                At TechClover, our story is woven together by the vision and leadership of Sapna Oberai, the driving force behind our success. With a remarkable career spanning 15 years in HR and staffing, Sapna has honed her expertise in Talent Acquisition and consulting to perfection.
                <br /> <br />
                Sapna's journey is marked by the successful placement of numerous senior and directorial positions, a testament to her prowess as an executive search recruiter. Her commitment to finding the right talent for your organization is unwavering.
                <br /> <br />
                Sapna's educational background is equally impressive, with a Master's degree in Law, a PGDM in PM & HR, and a Bachelor's degree in Engineering. She is a member of esteemed professional organizations such as CIPD, SHRI, AIHR, and a qualified life coach. Her vast array of professional qualifications extends across HR, people analytics, digital marketing, the future of work, diversity, unconscious bias, and talent management. This comprehensive knowledge, coupled with her deep understanding of staffing agency operations and business management, paints a vivid picture of her capabilities.
                <br /> <br />
                When you partner with Sapna, you embark on a transformative journey that redefines recruitment standards. Together, we unlock pivotal talent, ensuring a lasting impact on your organization's success.
                <br /> <br />
                TechClover is not just a recruitment firm; it's your strategic partner in building a brighter future. Explore the difference today.

                <hr className='mt-3' />
            </p>


            <div className='secondPage ms-5 '>
                <div className='passionContent d-flex align-items-center'>
                    <img className='passionImg' />
                    <div className='ms-4'>
                        <h1 className='heading '>Our Passion</h1>
                        <p>Our passion is to champion excellence in the tech sector. By identifying transformative talent and pairing them with forward-thinking companies, we are proud contributors to the industry’s growth and success.</p>
                    </div>
                </div>
            </div>


            <div className='thirdPage'>
                <div className='approachContent d-flex align-items-center'>
                    <div className='ms-4'>
                        <h1 className='heading ms-3'>Our Approach</h1>
                        {/* <p>Our passion is to champion excellence in the tech sector. By identifying transformative talent and pairing them with forward-thinking companies, we are proud contributors to the industry’s growth and success.</p> */}
                        <ul>
                            <li><u>People are the most important element of any business</u>– they sustain and innovate. We help Our clients (who are people themselves) recruit the right people. <u>We strive towards making this experience good and worth remembering and repeating.</u></li>
                            <li>We aspire to <u> raise the bar in recruitment industry by focusing on people, not positions.</u> This <span>“People first Recruitment Experience”</span> is what defines us and differentiates us.</li>
                            <li><u>We want to be known for quality and agility,</u> among the clients, who are not serviced as per their need by other recruiting partners or want to work with more agile partners.</li>
                            <li>  We want all the organizations get access to the talent they need and succeed in their goals. We can help achieve this via a process that focusses on quality assurance, clear and timely communication.</li>
                        </ul>
                    </div>
                    <img className='passionImg ms-4' />
                </div>
            </div>

            <div className='fourthPage ms-5 '>
                <div className='passionContent d-flex align-items-center'>
                    <img className='passionImg' />
                    <div className='ms-4'>
                        <h1 className='heading '>What makes unique ?</h1>
                        <h6 className=''> - Our One year guarantee period</h6>
                        <p>
                            At TechClover, we stand by our placements with a distinctive one-year guarantee period. This reflects our absolute confidence in our process and the quality of our candidates. We take pride in our thorough vetting and matching methodologies which ensure that we deliver only the best-fit talent for your organization.
                            <br /> <br />
                            Our guarantee means that we are committed to your long-term success. If a candidate placed by us leaves or is let go within the first year, we pledge to undertake a replacement search at no additional cost to you. We see this commitment not merely as a guarantee, but as a testament to our unwavering dedication to our clients’ satisfaction and success.</p>
                    </div>
                </div>
            </div>

            <div className='fifthPage '>
                <h1 className='heading text-gradient' >Our Values</h1>
                <div className='d-flex mt-5 mx-5 justify-content-around space-between mt-4'>
                    <div className='dummyCard'></div>
                    <div className='dummyCard'></div>
                    <div className='dummyCard'></div>
                    <div className='dummyCard'></div>
                    <div className='dummyCard'></div>
                </div>

            </div>
        </div>
        </>
    )
}

export default About