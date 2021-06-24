import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/instagram.png";
import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_container}>
        <ul className={style.link_list}>
          <li className={style.link_item}>
            <Link className={style.link} to="/">
              About Us
            </Link>
          </li>
          <li className={style.link_item}>
            <Link className={style.link} to="/">
              Policy
            </Link>
          </li>
          <li className={style.link_item}>
            <Link className={style.link} to="/">
              Contact Us
            </Link>
          </li>
        </ul>
        <ul className={style.services}>
          <li className={style.link_item}>
            <Link className={style.link} to="/">
              Shipment
            </Link>
          </li>
          <li className={style.link_item}>
            <Link className={style.link} to="/">
              Return
            </Link>
          </li>
          <li className={style.link_item}>
            <Link className={style.link} to="/">
              Charges
            </Link>
          </li>
        </ul>
        <ul className={style.contact_info}>
          <li className={style.link_item}>info@ourstore.com</li>
          <li className={style.link_item}>070-XXXXXXX</li>
          <li className={style.link_item}>
            <Link className={style.link} to="/">
              FAQs
            </Link>
          </li>
        </ul>
        <ul className={style.social_icons}>
          <li className={style.footer_icon}>
            <img className={style.icon_img} src={facebookIcon} alt="" />
          </li>
          <li className={style.footer_icon}>
            <img className={style.icon_img} src={instagramIcon} alt="" />
          </li>
          <li className={style.footer_icon}>
            <img className={style.icon_img} src={twitterIcon} alt="" />
          </li>
        </ul>
      </div>
      <p>© Changemakers Education 2021 - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
