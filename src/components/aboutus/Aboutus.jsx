import React from 'react'
import "./aboutus.css"
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import { RiFoldersLine } from 'react-icons/ri';


const Aboutus = () => {
    return (
        <section id="about">
            <h5> get to Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                  
                    <article className="about__card">
                        <FaAward/>
                        <h5>Experience</h5>
                        <small> 15+ years Working</small>
                    </article>

                    <article className="about__card">
                        <FiUsers/>
                        <h5>Clients</h5>
                        <small> 120+ wordwide </small>
                    </article>

                    <article className="about__card">
                        <RiFoldersLine />
                        <h5> Projetcs</h5>
                        <small> 80+ Completed</small>
                    </article>
                    </div>
                    <p>
                        Since I began working as a Front End developer, I have been solving design issues and bringing great ideas to life using HTML, CSS, jQuery, and a keen eye for critical design and web standards.

                        A proven Frontend Developer with experience in the computing industry. Capable of using Javascript, ES6, Typescript, HTML5, CSS3, NodeJS, and Angular.

                        HTML/5, CSS/3, SASS, LESS, jQuery, jQuery UI, Bootstrap 3, 4, responsive design, Kendo UI, Angularjs, and Ionic Framework. I stay current with current trends and practices to ensure the quality design is met.
                    </p>
                </div>
            

            </div>
        </section>
    )
}

export default Aboutus
