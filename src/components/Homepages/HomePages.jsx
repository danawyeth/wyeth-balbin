import React, { useRef } from 'react'
import Header from '../Header'
import Intro from '../pageContent/Intro'
import Portfolio from '../pageContent/Portfolio'

const HomePages = () => {
   
    return (
        <>
            <Header />
            <Intro/>
            <Portfolio/>
        </>
    )
}

export default HomePages;
