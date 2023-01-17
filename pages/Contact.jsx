import React from 'react'
import Hero from '../Components/Hero'
import Contact from '../Components/contact'

const contact = () => {
    return(
        <div>
            <Hero heading='Contact me' message='999-999-9999, Subit a form below' />
            <Contact />
        </div>
    )
}

export default contact