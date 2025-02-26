import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import INFO from "./myInfo";
import "./Contact.css"
import { CgMail } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        // mode: "onChange",
        mode: "onBlur",
    });

    const handleEmail = (data) => console.log(data);

    const handleError = (errors) => console.error(errors);

    const validations = {
        name: {
        required: "*Name required.",
        minLength: {
            value: 2,
            message: "name should be at-least 2 characters.",
        },
        },
        email: {
        required: "*Email is required.",
        pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Email is not valid.",
        },
        },
        message: {
        required: "*Message required.",
        minLength: {
            value: 5,
            message: "*Message must be at least 5 characters long.",
        },
        },
    };

    const sendEmail = (e) => {
        e.preventDefault();
        // if (name && emailAddress && emailMessage) {

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
            (result) => {
            console.log(result.text);
            },
            (error) => {
            console.log(error.text);
            }
        );
    };

  return (
    <div id="contact" className="contactSec">
        <h2>Get in Touch</h2>
        <div className="allForm">
        <div className="formLeft">
            <form
                ref={form}
                onSubmit={handleSubmit(handleEmail, handleError)}
                id="contact-form">
                <div className="formDetail">
                    <div className="formName">
                        <input
                        name="name"
                        className="input "
                        type="text"
                        placeholder="Your Name"
                        {...register("name", validations.name)}
                        />
                        <span className="help is-danger">
                        {errors?.name && errors.name.message}
                        </span>
                        <span className="icon is-small is-left">
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        </span>
                    </div>
                    <div className="formEmail">
                        <input
                        name="email"
                        className="input "
                        type="email"
                        placeholder="Email"
                        {...register("email", validations.email)}
                        />
                        <span className="help is-danger">
                        {errors?.email && errors.email.message}
                        </span>
                        <span className="icon is-small is-left">
                        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                        </span>
                        <span className="icon is-small is-right">
                        {/* <FontAwesomeIcon icon={faCheck} /> */}
                        </span>
                    </div>
                    <div className="formMessage">
                        <textarea
                        name="message"
                        className="textarea"
                        placeholder="Enter message..."
                        {...register("message", validations.message)}
                        ></textarea>
                        <span className="help is-danger">
                        {errors?.message && errors.message.message}
                        </span>
                    </div>
                </div>
                <div className="formButton">
                    <button
                    onClick={sendEmail}
                    id="message-button"
                    type="submit"
                    disabled={true}
                    >
                    Send message
                    </button>
                </div>
            </form>
        </div>
        <div className="formRight">
            <div className="socialCont">
                <div className="social">
                    <a href={INFO.contactSec.socials.gmail}><CgMail /></a>
                    <p>Gmail</p>
                </div>
                <div className="social">
                    <a href={INFO.contactSec.socials.twitter}><FaSquareXTwitter /></a>
                    <p>Twitter</p>
                </div>
                <div className="social">
                    <a href={INFO.contactSec.socials.instagram}><IoLogoInstagram /></a>
                    <p>Instagram</p>
                </div>
                <div className="social">
                    <a href={INFO.contactSec.socials.facebook}><FaFacebook /></a>
                    <p>Facebook</p>
                </div>
            </div>
            <div className="mobAdd">
                <div><span><IoCall /></span>{INFO.contactSec.socials.mobile}</div>
                <div><span><FaAddressCard/></span>{INFO.contactSec.socials.address}</div>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default Contact