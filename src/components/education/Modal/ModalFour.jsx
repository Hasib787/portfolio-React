import React from "react";
import Social from "../../Social";

const ModalFour = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/news/cfhi.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* END IMAGE */}
      <div className="news_details">
        <span>
          2011 <a href="#">Secondary Education Certificate</a>
        </span>
        <h3>Business Studies</h3>
        <h3 className="title">Chakhar Fazlul Huq Institution</h3>
      </div>
      {/* End details */}
      <div className="main_content">
        <div className="descriptions">
          <p>
            Chakhar Fazlul Huq Institution is a public secondary school located in Chakhar, Banaripara Upazila, Barishal District. It is one of the oldest public secondary schools in Banaripara Upazila, Barishal District. It was established in the year 1940. 
          </p>
        </div>
        {/* END DESCRIPTION */}
        <div className="news_share">
          <span>Share:</span>
          <Social />
          {/* END SOCIAL SHARE */}
        </div>
      </div>
    </div>
  );
};

export default ModalFour;
