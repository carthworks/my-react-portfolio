import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github/carthworks/" target="_blank" rel="noreferrer"> <BsGithub /></a>
            <a href="https://dribbble.com/in/" target="_blank" rel="noreferrer"><BsDribbble /></a>
        </div>
    )
}

export default HeaderSocials
