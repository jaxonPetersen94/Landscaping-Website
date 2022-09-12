import React, { useRef } from "react";
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
    console.log("Contact us - handleClick()");
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
          </span>
        </div>
        <div className={styles.section}>
          <form id={styles.form} onSubmit={handleClick}>
            <div id={styles.nameContainer}>
              <div className={styles.inputContainer}>
                First name <input className={styles.input} required ref={firstName} />
              </div>
              <div className={styles.inputContainer}>
                Last name <input className={styles.input} required ref={lastName} />
              </div>
            </div>
            <div className={styles.inputContainer}>
              Email <input className={styles.input} required ref={email} type="email" />
            </div>
            <div className={styles.inputContainer}>
              Question{" "}
              <textarea
                id={styles.textArea}
                className={styles.input}
                required
                ref={question}
                type="text"
              />
            </div>
            <button id={styles.sendBtn} type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
