import React from 'react'
import Image from "next/image" ;



const logo = () => {
    const bombersLogo = "/bombersLogo.svg";
    return <Image src= {bombersLogo} width="50px" height="50px" />
    
}

export default logo
