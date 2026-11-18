
import React from 'react';

function Contact() {
  return (
    <section className="download-page py-5">
      <div className="container text-center">

        <h2>Get the app now!</h2>

        <p>
          Download our free app and enjoy an amazing experience.
          Available for Android and iOS devices.
        </p>

        <div className="download-buttons mt-4">

          <a href="#" className="mr-2">
            <img
              src="img/app-store-badge.svg"
              alt="Download on App Store"
              className="img-fluid"
            />
          </a>

          <a href="#">
            <img
              src="img/google-play-badge.svg"
              alt="Get it on Google Play"
              className="img-fluid"
            />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
