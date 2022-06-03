import React from 'react'
import "./contactus.css"
// import {Footer} from '../../components/footer/Footer'
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contactus = () => {
    return (
        <section id="contact">
            <h5> Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option_icon" />
                        <h4>Email</h4>
                        <h5>contactus@gmail.com</h5>
                        <a href="mailto:info@abc.com"> Send Message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option_icon" />
                        <h4>Messsanger</h4>
                        <h5>carthworks@gmail.com</h5>
                        <a href="mailto:info@abc.com"> Send Message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option_icon" />
                        <h4>Whatsapp</h4>
                        <h5>contactus@gmail.com</h5>
                        <a href="mailto:info@abc.com"> Send Message</a>
                    </article>
                </div>
                <form action="post">
                    <input type="text" name="name" placeholder="Please Enter Name" required />
                    <input type="email" name="email" placeholder="Please Enter Email" required />
                    <textarea name="message" id="" cols="30" rows="7" placeholder="message here" required />
                    <button type="submit" className="btn btn-primary">Submit </button>
                </form>
            </div>
        </section>
    )
}

export default Contactus
