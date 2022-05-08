import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <div className="parent-footer">
        <div>
          <h2>Information</h2>
          <p>About Us</p>
          <p>Associated Brands</p>
          <p>FAQ</p>
          <p>Collaborate with FabBag</p>
          <p>Contact Us</p>
          <p>Returns & Refunds</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h2>Customer Care</h2>
          <p>
            Call: <b>022-6805-6010</b> <br />
            (Monday to Friday: 9 AM-7PM).
          </p>
          <p> Mail: crew@fabbag.com</p>
        </div>
        <div>
          <h2>NewsLetter</h2>
          <p className="news-p">
            Signup for the latest offers, updates and news
          </p>
          <input type="text" placeholder="Your Email address" />
          <button>SUBSCRIBE</button>
          <br />
          <p className="news-p">Don't worry we don't spam </p>
        </div>
      </div>
      <div className="parent2-footer">
        <div>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <br />
          <p>Copyright © 2021 fabbag.com All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
