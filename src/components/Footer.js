import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <section className="footer" id="footer">
          <div className="box-container">
            <div className="box">
              <h3>About Us</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus facere tempora distinctio, officia illum sequi Lorem
                ipsum dolor sit amet.
              </p>
            </div>
            <div className="box">
              <h3>Our Offices</h3>
              <p>Toba Tek Singh</p>
              <p>Lahore</p>
              <p>Faisalabad</p>
              <p>Islamabad</p>
              <p>Karachi</p>
            </div>
            <div className="box">
              <h3>Follow Us</h3>
              <p>Linkedin</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>WhatsApp</p>
              <p>Twitter</p>
              <p>Messenger</p>
            </div>
          </div>

          <h1 className="credit">&copy;2022. All copywrite reserved!</h1>
        </section>
      </footer>
    </>
  );
}
