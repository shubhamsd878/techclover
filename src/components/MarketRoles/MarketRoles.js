import React from 'react'
import './style.scss'
const MarketAndRoles = () => {
  return (
    <div className='marketroles container mt-5'>
        <h1> Empowering Industries, <br /><span className='top-text-gradient'> Shaping the Future - Your </span> <br /> Digital Transformation Partner</h1>
        <hr className='my-5'/>

        <div className='secondPage'>
          <h5 >Market Segment</h5>
          <p className=''>- Our primary focus is on sourcing talents across these four key digital tech sectors, each offering unique skills–</p>
          <div className='d-flex mt-4 justify-content-between space-between mt-4'>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
          </div>

          <p className='mt-5'>
            Regardless of the industry or the size of the company, we provide individual attention to each client. We understand that there is a cost to each company for a job to remain open. Our clients call us when they are searching for right talent and need to hire quickly.
          </p>
        </div>

        <div className='thirdPage'>
          <h5 >Role Segment</h5>
          <p>- At TechClover, we’re committed to transforming the tech talent landscape. We understand that every role is pivotal, and we’re here to help you secure the right fit.</p>
          <p>Our Expertise</p>
          <div className='d-flex mt-4 justify-content-between space-between mt-4'>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
            <div className='dummyCard'></div>
          </div>

          <p className='mt-5'>We invest heavily in these roles, understanding their criticality in driving business growth. Our approach ensures a high volume of quality candidates, enabling you to fill positions rapidly without compromising on talent quality.</p>
        </div>
    </div>
  )
}

export default MarketAndRoles