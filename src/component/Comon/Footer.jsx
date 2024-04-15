import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className=" text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are dedicated to providing information about amazing tourist
              destinations around the world.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              <p>123 Tourist St.</p>
              <p>City, Country</p>
              <p>Email: info@touristdestinations.com</p>
              <p>Phone: +123-456-7890</p>
            </address>
          </div>
        </div>
        <div className="footer-icons-section">
          <p className="my-4 border-light">
            <div className="text-center social-icons ">
              <a href="#" className="icons-link ">
                <Facebook />
              </a>

              <a href="#" className="icons-link">
                <Twitter />
              </a>

              <a href="#" className="icons-link">
                <Linkedin />
              </a>

              <a href="#" className="icons-link">
                <Instagram />
              </a>
            </div>
          </p>
          <div className="text-center mt-3">
            <p className="mb-0">
              &copy; 2024 Tourist Destinations. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
