// internal imports
import styles from "./page.module.css";
import Image from "next/image";
import { cardData } from "./data";
import { AppDesignWorkPlaces } from "./Components/AppDesignWorkPlaces";
import YouMayLikeWorkPlaces from "./Components/YouMayLikeWorkPlaces";
import CertifiedExpertise from "./Components/CertifiedExpertise";
// external imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHouse, faGear } from "@fortawesome/free-solid-svg-icons";
import {
  faCircleQuestion,
  faUser,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons";
import Footer from "./Components/Footer";

export default function Home() {
  // landing page

  return (
    <div className="pageHeight">
      {/* for the navbar */}
      <div
        className={`navbar h-20 px-5 flex justify-between items-center w-full bg-white ${styles.greyBottomBorder}`}
      >
        <div className={` ${styles.logoSize} flex items-center`}>
          <a>
            <Image src="/logo.png" alt="logo" width={179.18} height={31.04} />
          </a>
        </div>

        <div className="form-control mt-1">
          <input
            type="text"
            placeholder="Search For Any Service Here"
            className={`input input-bordered ps-5 pe-2 py-2 placeholder:font-semibold ${styles.greyFullBorder} rounded-lg border-2 ${styles.searchInput}`}
          />
        </div>
        {/* for buttons in navbar */}
        <div className="font-base">
          <button className={`mx-2 px-7 text-xl py-2 ${styles.sellerBtn}`}>
            Become Seller
          </button>
          <button className={`mx-2 px-7 text-xl rounded-lg ${styles.loginBtn}`}>
            Login
          </button>
          <button
            className={`mx-2 px-7 py-2 text-xl rounded-lg ${styles.registerBtn}`}
          >
            Register
          </button>
        </div>
      </div>

      {/* for the categories */}
      <div
        className={`flex ${styles.categories} justify-around pt-3 pb-3 ${styles.greyBottomBorder} text-base font-regular`}
      >
        <span>Graphic Designing</span>
        <span>Digital Marketing</span>
        <span>Writing & Translation</span>
        <span>Video & Animation</span>
        <span>Programming & Tech</span>
        <span>Business</span>
        <span>Social Media</span>
        <span>All Services</span>
      </div>

      <div className={`flex justify-between mt-10 `}>
        {/* navigation side */}
        <div className={`${styles.widthBox1} flex justify-center`}>
          <div
            className={`border-2  ${styles.navigateSide} pb-96 px-8 pt-5 rounded-lg`}
          >
            <div className={` ${styles.homeBtn} font-bold px-5 py-2 flex mb-2`}>
              <div className="w-6 me-2">
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <div>Home</div>
            </div>

            <div className={`font-regular px-5 mb-2 py-2 flex`}>
              <div className="w-6 me-2">
                <FontAwesomeIcon icon={faRectangleList} />
              </div>
              <div>Orders</div>
            </div>

            <div className={`font-regular px-5 py-2 flex mb-2`}>
              <div className="w-5 me-3">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div>Profile</div>
            </div>

            <div className={`font-regular px-5 py-2 flex mb-2`}>
              <div className="w-6 me-2">
                <FontAwesomeIcon icon={faGear} />
              </div>
              <div>Settings</div>
            </div>

            <div className={`font-regular px-5 py-2 flex mb-2`}>
              <div className="w-6 me-2">
                <FontAwesomeIcon icon={faCircleQuestion} />
              </div>
              <div>Help & Support</div>
            </div>
          </div>
        </div>

        {/* landing page main content */}
        <div className={`flex-col items-center ${styles.widthBox2}`}>
          {/* for image */}
          <div>
            <Image
              src="/landingPageImg.jpg"
              alt="landing page image"
              width={989}
              height={309}
              className={`${styles.imgBorderRadius}`}
            />
          </div>

          <AppDesignWorkPlaces cardData={cardData} />
          <YouMayLikeWorkPlaces cardData={cardData} />
          <CertifiedExpertise cardData={cardData} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
