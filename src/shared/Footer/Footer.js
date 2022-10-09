import React from "react";
import logo from "../../assets/img/logo/logo.png";
export default function Footer() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-around">
        <div className="">
          <img src={logo} alt="" />
          <p>
            © 2022 Flone.
            <br />
            All Rights Reserved
          </p>
        </div>
        <div>
          <h4>ABOUT US</h4>
          <ul>
            <li>
              <p>About us</p>
            </li>
            <li>
              <p>Store location</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
            <li>
              <p>Orders tracking </p>
            </li>
          </ul>
        </div>
        <div>
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>
              <p>Returns</p>
            </li>
            <li>
              <p>Support Policy</p>
            </li>
            <li>
              <p>Size guide</p>
            </li>
            <li>
              <p>FAQs</p>
            </li>
          </ul>
        </div>
        <div>
          <h4>FOLLOW US</h4>
          <ul>
            <li>
              <p>Facebook</p>
            </li>
            <li>
              <p>Twitter</p>
            </li>
            <li>
              <p>Instagram </p>
            </li>
            <li>
              <p>Youtube </p>
            </li>
          </ul>
        </div>
        <div>
          <h4>SUBSCRIBE</h4>
          <ul>
            <li>
              <p>
                Get E-mail updates about our latest shop
                <br /> and special offers.
              </p>
            </li>
            <li>
              <p href="#">SUBSCRIBE</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
