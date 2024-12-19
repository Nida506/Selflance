import Image from "next/image";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={`card bg-base-100 shadow-xl rounded-lg ${styles.card}`}>
      {/* Card image */}
      <figure>
        <Image
          src="/cardImg.jpg"
          alt="card image"
          width={304.36}
          height={330}
          className={`${styles.cardImg}`}
        />
      </figure>

      {/* Card body */}
      <div className="card-body px-5 pt-2">
        {/* Rating and user details */}
        <div className={`flex ${styles.ratingDetail}`}>
          <div>
            <Image
              src="/user.png"
              alt="user"
              width={55}
              height={55}
              className={`${styles.userLogo}`}
            />
          </div>

          {/* User info */}
          <div>
            <div className="flex items-center">
              <h1 className={`mx-1 ${styles.midSize} ${styles.midFontWeight}`}>
                Danu
              </h1>
              <Image
                src="/badge.png"
                alt="Badge"
                width={25}
                height={25}
                className={`${styles.badgeLogo}`}
              />
            </div>

            {/* Rating info */}
            <div className="flex items-center pb-1">
              <Image
                src="/star.png"
                alt="star"
                width={25}
                height={25}
                className={`mx-1 ${styles.starLogo}`}
              />
              <p className={`${styles.midSize} ${styles.midFontWeight}`}>
                4.8{" "}
                <span className={`text-stone-400 ${styles.smallFontWeight}`}>
                  (843)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Card description */}
        <p
          className={`mt-2 mb-2 ${styles.fullSize} ${styles.smallFontWeight} font-regular`}
        >
          I will do modern minimalist business logo design for your brand
        </p>

        {/* Pricing info */}
        <p className={`${styles.highFontWeight}`}>
          <span className={`${styles.blueColor} ${styles.smallSize}`}>
            STARTING AT
          </span>
          <span className={`${styles.fullSize} ms-2`}>100$</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
