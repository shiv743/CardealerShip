import React from "react";
import Navbar from "../components/Navbar"; // Ensure Navbar is imported
import "../Style.T/AboutUs.css"; // Ensure the CSS file is linked

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us-container">
        <div className="about-content">
          {/* About Section */}
          <div className="about-section">
            <div className="about-image">
              <img
                src="/Images/old.png"
                alt="Off-Road Vehicle"
                className="off-road-image"
              />
              <div className="about-overlay-text">HONESTY | TRUTH | FOREVER</div>
            </div>
            <div className="about-text">
              <h2>Majhail Auto Dealers</h2>
              <p>
                <strong>
                  Before we get ahead of ourselves, we want to welcome you to
                  Majhail Auto Dealers. While nothing can replace trying one on the
                  lot experience.
                </strong>
              </p>
              <p>
                We are an AMVIC licensed used car dealer. AMVIC (Alberta Motor
                Vehicle Industry Council) enforces the Motor Vehicle Dealers
                Act, 2002 (MVDA) on behalf of the Ontario government through
                the Ministry of Government and Consumer Services (MGCS). Their
                mandate is to maintain a fair and informed marketplace in
                Ontario by protecting the rights of consumers, enhancing
                industry professionalism and ensuring fair, honest, and open
                competition for registered motor vehicle dealers.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="core-values-section">
            <h2>CORE VALUES</h2>
            <p>
              We go through extensive factory training so that we may provide
              you with the knowledge you need to make an educated decision in
              choosing the vehicle that is right for your lifestyle.
            </p>
            <ul>
              <li>✔ Stress-free finance department.</li>
              <li>✔ Robust selection of popular vehicles.</li>
              <li>✔ 350 offers on site, trusted by a community.</li>
              <li>✔ Maintain your car to stay safe on the road.</li>
              <li>✔ We know how to handle a wide range of car services.</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="core-values-images">
            <img
              src="/Images/black.png"
              alt="Red Car"
              className="core-value-image"
            />
          </div>
        </div>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-section">
            <h3>Majhail (Sales)</h3>
            <p>506 Main St. N, Reddeer, Alberta</p>
            <p>Monday - Friday: 10:00AM - 8:00PM</p>
            <p>Saturday: 10:00AM - 7:00PM</p>
          </div>
          <div className="footer-section">
            <h3>Majhail ON MAIN (Service)</h3>
            <p>506 Main St. N, Reddeer, Alberta</p>
            <p>Monday - Friday: 10:00AM - 7:00PM</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;





