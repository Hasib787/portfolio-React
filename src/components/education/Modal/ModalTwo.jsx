import React from "react";
import Social from "../../Social";

const ModalTwo = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/news/ulab.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End image */}

      <div className="news_details">
        <span>
          2018 <a href="#">Bachelor Degree</a>
        </span>
        <h3>Finance BBA</h3>
        <h3 className="title">University of Liberal Arts Bangladesh</h3>
      </div>
      {/* End details */}

      <div className="main_content">
        <div className="descriptions">
          <p>
            University of Liberal Arts Bangladesh is a private liberal
            arts-based University in Dhanmondi, Dhaka, Bangladesh. Founded in
            February 2002, permission to open was received from the University
            Grants Commission of Bangladesh in November 2003, pursuant to the
            Private University Act 1992.
          </p>
        </div>
        {/* End description */}
        <div className="news_share ">
          <span>Share:</span>
          <Social />
        </div>
        {/* End news share */}
      </div>
    </div>
  );
};

export default ModalTwo;
