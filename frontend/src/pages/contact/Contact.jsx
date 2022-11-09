import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./contact.module.css";

export default function Contact() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const question = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div id={styles.container}>
        <div id={styles.textSection} className={styles.section}>
          <span style={{ borderBottom: "1px solid black" }}>Contact us</span>
          <span>
            Have a question about our services?
            <br /> Fill out the form, and we'll get in touch as soon as we can.
            <br />
            <span id={styles.raqLink}>
              <Link to="/request-quote" style={{ textDecoration: "none" }}>
                Want a quote on a custom job instead?
              </Link>
            </span>
          </span>
        </div>
        <div className={styles.section}>
          <form id={styles.form} onSubmit={handleClick}>
            <div id={styles.nameContainer}>
              <div className={styles.inputContainer}>
                <label for="firstName">
                  First name <span className={styles.requiredFieldSymbol}>*</span>
                </label>
                <input id="firstName" className={styles.input} required ref={firstName} />
              </div>
              <div className={styles.inputContainer}>
                <label for="lastName">
                  Last name <span className={styles.requiredFieldSymbol}>*</span>
                </label>
                <input id="lastName" className={styles.input} required ref={lastName} />
              </div>
            </div>
            <div className={styles.inputContainer}>
              <label for="email">
                Email <span className={styles.requiredFieldSymbol}>*</span>
              </label>
              <input id="email" className={styles.input} required ref={email} type="email" />
            </div>
            <div className={styles.inputContainer}>
              <label for={styles.textArea}>
                Question <span className={styles.requiredFieldSymbol}>*</span>
              </label>
              <textarea
                id={styles.textArea}
                className={styles.input}
                required
                ref={question}
                type="text"
              />
            </div>
            <input type="submit" value="Send message" id={styles.sendBtn} />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
