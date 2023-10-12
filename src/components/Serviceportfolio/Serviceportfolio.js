import React from 'react'
import './style.scss'

const Serviceportfolio = () => {
    return (
        <>
            <div className='container firstpage mt-5'>
                {/* <h1 className='text-gradient'> Tailored, Efficient, and Budget- <br /> Conscious Solutions for Your Talent Needs</h1> */}
                {/* <h1 className=''> <span style={{color:'#800080'}}>T</span>ailored, <span style={{color:'#800080'}}>E</span>fficient, and <span style={{color:'#800080'}}>B</span>udget- <br /> Conscious Solutions for Your Talent Needs</h1> */}
                <h1 > Tailored, Efficient, and Budget- <br /> <span className='text-gradient'> Conscious Solutions for Your Talent Needs </span></h1>
                <hr className='my-5' />
                <p>
                Recognizing the diverse and tailor-made requirements across various departments and business segments, TechClover offers 4 unique permanent search solutions designed to align with our client needs.
                </p>

                <div className='cards d-flex mt-4 justify-content-between mt-4'>
                    <div className='dummyCard'></div>
                    <div className='dummyCard'></div>
                    <div className='dummyCard'></div>
                </div>
            </div>

        </>
    )
}

export default Serviceportfolio