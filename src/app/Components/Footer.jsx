import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={`${styles.color} ${styles.shadow} pt-10 mt-10 border px-7`}>
      <div className={`flex justify-around ${styles.border} pb-7 `}>
        {/* logoBox */}
        <div className={`${styles.logoBox}`}>
          <Image src="/logo.png" alt="logo" width={178.25} height={30} />
          <p className={`${styles.logoBoxPara} py-3`}>
            Unlock the potential of your projects with Selflance, the premier
            online platform that connects you with certified companies and
            skilled freelancers.
          </p>
          <Image
            src="/platformLogos.png"
            alt="platform logos"
            width={280}
            height={40}
            className=""
          />
        </div>
        {/* about */}
        <div>
          <h1
            className={`${styles.color} ${styles.fullSize} ${styles.highFontWeight} pb-3`}
          >
            About
          </h1>
          <ul
            className={`${styles.color} ${styles.smallSize} ${styles.middleFontWeight} `}
          >
            <li className="py-2">Company Overview</li>
            <li className="py-2">Blogs</li>
            <li className="py-2">Become A Seller</li>
            <li className="py-2">Invite A Friend</li>
            <li className="py-2">Terms Of Service</li>
            <li className="py-2">Privacy Policy</li>
          </ul>
        </div>
        {/* Categories */}
        <div>
          <h1
            className={`${styles.color} ${styles.fullSize} ${styles.highFontWeight} pb-3`}
          >
            Categories
          </h1>
          <ul
            className={`${styles.color} ${styles.smallSize} ${styles.middleFontWeight}`}
          >
            <li className="py-2">Graphic And Designing</li>
            <li className="py-2">Digital Marketing</li>
            <li className="py-2">Programming & Tech</li>
            <li className="py-2">Writing And Translation</li>
            <li className="py-2">Business</li>
            <li className="py-2">Social Media</li>
            <li className="py-2">AI Services</li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h1
            className={`${styles.color} ${styles.fullSize} ${styles.highFontWeight} pb-3`}
          >
            Support
          </h1>
          <ul
            className={`${styles.color} ${styles.smallSize} ${styles.middleFontWeight}`}
          >
            <li className="py-2">Help & Support</li>
            <li className="py-2">Trust & Safety</li>
            <li className="py-2">Refund Policy</li>
            <li className="py-2">Quality Guide</li>
            <li className="py-2">Terms Of Service</li>
            <li className="py-2">FAQs</li>
          </ul>
        </div>
        {/* Apps */}
        <div>
          <h1
            className={`${styles.color} ${styles.fullSize} ${styles.highFontWeight} pb-5`}
          >
            Apps
          </h1>
          <Image
            src="/googlePlayStore.png"
            alt="Google play store"
            width={155.99}
            height={44.74}
            className="pb-3"
          />
          <Image
            src="/appStore.png"
            alt="Google play store"
            width={155.99}
            height={44.74}
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between  ps-10 pe-10 items-center ">
          {" "}
          <div
            className={`${styles.smallSize} ${styles.middleMostFontWeight} `}
          >
            © Copyright 2024, All Rights Reserved by Selflance Technologies
            Private Limited.
          </div>
          <div className="flex justify-end">
            <div className="flex items-center  ">
              <p
                className={`${styles.fullSize} ${styles.middleMostFontWeight}`}
              >
                {" "}
                CIN: U63999MH2023PTC400992
              </p>
              <FontAwesomeIcon
                icon={faCircleInfo}
                className={`${styles.iconFont}`}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pb-5">
          <div className="flex items-center">
            <p className={`${styles.fullSize} ${styles.middleMostFontWeight}`}>
              D-U-N-S®: 45-387-8945
            </p>
            <FontAwesomeIcon
              icon={faCircleInfo}
              className={`${styles.iconFont} me-10`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
