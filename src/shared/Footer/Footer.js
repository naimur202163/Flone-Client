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
          <h4 >ABOUT US</h4>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Store location</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Orders tracking </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Support Policy</a>
            </li>
            <li>
              <a href="#">Size guide</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>FOLLOW US</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram </a>
            </li>
            <li>
              <a href="#">Youtube </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>SUBSCRIBE</h4>
          <ul>
            <li>
              <a href="#">
                Get E-mail updates about our latest shop
                <br /> and special offers.
              </a>
            </li>
            <li>
              <a href="#">SUBSCRIBE</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
