import React from "react";

const ModalFive = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/oursolution2.jpeg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Our Solution</h3>
        <p>
          Our Solution accelerates with the best and the most useful as well as
          precisely sound super service assistance for regarded clients are
          filling in the most raised numerical degree day by day. Our motto is
          client satisfaction, above all. We provide high-quality,
          results-driven Services Especially in Social Media Marketing, Web
          Design, Web Development, Graphic Design, Video Editing, Training,
          Online Advertising, YouTube Marketing, Search Engine Optimization
          (SEO), and Employee Support at an affordable price range, especially
          for small and medium-sized businesses to achieve the high master
          standard.
        </p>
      </div>
    </div>
  );
};

export default ModalFive;
