import React, { useRef } from 'react'
import Header from '../Header'
import Intro from '../pageContent/Intro'
import PortDataTest from '../pageContent/PortDataTest'
import Portfolio from '../pageContent/Portfolio'

const HomePages = () => {
   
    return (
        <>
            <Header />
            <Intro/>
            <Portfolio/>
            {/*<PortDataTest/>*/}
        </>
    )
}

export default HomePages;
