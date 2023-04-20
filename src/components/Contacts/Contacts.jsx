import React, { useState } from "react";
import "./Contacts.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import { motion } from "framer-motion";

const Contacts = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1gian4g",
        "template_kmp6z46",
        form.current,
        "771dYs0slRhvVqSs8"
      )
      .then(
        (result) => {
          setDone(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <motion.div
          initial={{ transform: "ScaleY(0.8)" }}
          whileInView={{ transform: "ScaleY(0.95)" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="i-name"
        >
          <span style={{ color: darkMode ? "var(--tertiary-light)" : "" }}>
            Get in touch{" "}
          </span>
          <span>Contact Me</span>
          <div className="blur s-blur-2"></div>
        </motion.div>
        <motion.div
          initial={{ transform: "Scale(0.7)" }}
          whileInView={{ transform: "Scale(0.9)" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="f-icons"
        >
          <a href="https://wa.me/+2348103548367">
            <Whatsapp />
          </a>
          <a href="https://github.com/NwekeMaxwell">
            <Github />
          </a>
          <a href="https://twitter.com/MaxwellNweke">
            <Twitter />
          </a>
          <a href="https://linkedin.com/in/nwekemaxwell">
            <LinkedIn />
          </a>
        </motion.div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name/Organization"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            required
            className="user"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="button" />
          <span>
            {done &&
              "Thanks for contacting me. I will send a reply as soon as possible!"}
          </span>
          <div className="blur c-blur-1"></div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
