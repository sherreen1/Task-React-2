
import React from "react";

function Details() {
  return (
    <section className="details py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Discover What You Can Do</h2>
          <p className="text-muted">
            Our app offers everything you need to get started!
          </p>
        </div>

        <div className="row text-center">

          <div className="col-md-3 mb-4">
            <i className="fa-solid fa-mobile-screen-button fa-3x text-primary mb-3"></i>
            <h4>Device Mockups</h4>
            <p className="text-muted">
              Ready to use on any device, from phones to tablets and desktops.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <i className="fa-solid fa-camera fa-3x text-primary mb-3"></i>
            <h4>Flexible Use</h4>
            <p className="text-muted">
              Put an image, video, or anything you want inside your app.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <i className="fa-solid fa-gift fa-3x text-primary mb-3"></i>
            <h4>Free to Use</h4>
            <p className="text-muted">
              As always, this theme is free to download and use.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <i className="fa-solid fa-lock-open fa-3x text-primary mb-3"></i>
            <h4>Open Source</h4>
            <p className="text-muted">
              Since this theme is MIT licensed, you can use it freely.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Details;

