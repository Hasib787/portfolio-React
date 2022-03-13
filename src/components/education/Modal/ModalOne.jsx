import React from "react";
import Social from "../../Social";

const ModalOne = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/news/ju.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* END IMAGE */}
      <div className="news_details">
        <span>
          Pursuing <a href="#">Masters Degree</a>
        </span>
        <h3>Finance MBA</h3>
        <h3 className="title"> Jahangirnagar University</h3>
      </div>
      {/* End details */}
      <div className="main_content">
        <div className="descriptions">
          <p>
            Jahangirnagar University is a public research university located in
            Savar, Dhaka, Bangladesh. It is the only fully residential
            university of Bangladesh. The university was established in 1970 by
            the Jahangirnagar Muslim University Ordinance of the government of
            Pakistan.
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

export default ModalOne;
