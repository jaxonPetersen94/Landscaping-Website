import React, { useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./requestQuote.module.css";

export default function RequestQuote() {
  const firstName = useRef();
  const lastName = useRef();
  const question = useRef();

  return (
    <>
      <Navbar />
      <div id={styles.container}>
        <div id={styles.topBlock}>
          <img id={styles.topBlockimg} src="/assets/imgs/landscaping_3.jpg" alt="" />
          <span id={styles.title}>Request a Quote</span>
        </div>
        <div id={styles.clipboardOval}></div>
        <div id={styles.clipboardTopbar}></div>
        <div id={styles.formCard}>
          <h1 id={styles.firstTitle}>Request A Quote</h1>
          <div className={styles.doubleInputContainer}>
            <div className={styles.inputContainer}>
              <span className={styles.inputLabel}>
                First name <span className={styles.requiredFieldSymbol}>*</span>
              </span>
              <input className={styles.input} required ref={firstName} />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.inputLabel}>
                Last name <span className={styles.requiredFieldSymbol}>*</span>
              </span>
              <input className={styles.input} required ref={lastName} />
            </div>
          </div>
          <div className={styles.doubleInputContainer}>
            <div className={styles.inputContainer}>
              <span className={styles.inputLabel}>
                Phone Number <span className={styles.requiredFieldSymbol}>*</span>
              </span>
              <input className={styles.input} required ref={firstName} />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.inputLabel}>
                Email Address <span className={styles.requiredFieldSymbol}>*</span>
              </span>
              <input className={styles.input} required ref={lastName} />
            </div>
          </div>
          <img id={styles.suitCaseImg} src="assets/imgs/suitCase.jpg" alt="" />
          <h1 id={styles.secondTitle}>What Are You Looking For?</h1>
          <div id={styles.radioBtnsContainer}>
            <div>
              <label>
                <input type="radio" name="radioBtnAnswer" />
                <span className={styles.radioLabel}>Commercial Services</span>
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioBtnAnswer" />
                <span className={styles.radioLabel}>Residential Services</span>
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
          <button id={styles.raqBtn} type="submit">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
