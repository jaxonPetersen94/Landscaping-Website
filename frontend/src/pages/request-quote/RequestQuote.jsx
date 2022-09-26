import React, { useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./requestQuote.module.css";

export default function RequestQuote() {
  const firstName = useRef();
  const lastName = useRef();
  const phoneNumber = useRef();
  const email = useRef();
  const question = useRef();

  return (
    <>
      <Navbar />
      <div id={styles.container}>
        <div id={styles.topBlock}>
          <img id={styles.topBlockimg} src="/assets/imgs/landscaping_3.jpg" alt="" />
          <span id={styles.title}>Request a Quote</span>
          <div id={styles.clipboardOval}></div>
          <div id={styles.clipboardTopbar}></div>
        </div>

        <div id={styles.formCard}>
          <h1 id={styles.firstTitle}>Request A Quote</h1>
          <div className={styles.doubleInputContainer}>
            <div className={styles.inputContainer}>
              <label for="firstName" className={styles.inputLabel}>
                First name <span className={styles.requiredFieldSymbol}>*</span>
              </label>
              <input id="firstName" className={styles.input} required ref={firstName} />
            </div>
            <div className={styles.inputContainer}>
              <label for="lastName" className={styles.inputLabel}>
                Last name <span className={styles.requiredFieldSymbol}>*</span>
              </label>
              <input id="lastName" className={styles.input} required ref={lastName} />
            </div>
          </div>
          <div className={styles.doubleInputContainer}>
            <div className={styles.inputContainer}>
              <label for="phoneNumber" className={styles.inputLabel}>
                Phone Number <span className={styles.requiredFieldSymbol}>*</span>
              </label>
              <input
                id="phoneNumber"
                className={styles.input}
                type="tel"
                required
                ref={phoneNumber}
              />
            </div>
            <div className={styles.inputContainer}>
              <label for="email" className={styles.inputLabel}>
                Email Address <span className={styles.requiredFieldSymbol}>*</span>
              </label>
              <input id="email" className={styles.input} type="email" required ref={email} />
            </div>
          </div>
          <img id={styles.suitCaseImg} src="assets/imgs/suitCase.jpg" alt="" />
          <h1 id={styles.secondTitle}>What Are You Looking For?</h1>
          <div id={styles.radioBtnsContainer}>
            <div>
              <input id="commercialRadioBtn" type="radio" name="radioBtnAnswer" />
              <label for="commercialRadioBtn" className={styles.radioLabel}>
                Commercial Services
              </label>
            </div>
            <div>
              <input id="residentialRadioBtn" type="radio" name="radioBtnAnswer" />
              <label for="residentialRadioBtn" className={styles.radioLabel}>
                Residential Services
              </label>
            </div>
          </div>
          <textarea
            id={styles.textArea}
            className={styles.input}
            required
            ref={question}
            type="text"
          />
          <input type="submit" value="Submit" id={styles.raqBtn} />
        </div>
      </div>
      <Footer />
    </>
  );
}
