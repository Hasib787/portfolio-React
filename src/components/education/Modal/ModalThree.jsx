import React from "react";
import Social from "../../Social";

const ModalThree = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/news/city_college.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End image */}

      <div className="news_details">
        <span>
          2013 <a href="#">Higher Secondary Certificate</a>
        </span>
        <h3>Business Studies</h3>
        <h3 className="title"> Dhaka City College</h3>
      </div>
      {/* End details */}
      <div className="main_content">
        <div className="descriptions">
          <p>
            Dhaka City College also known as DCC, is one of the oldest private
            college in the country of Bangladesh. It is located at
            Qudrat-i-Khuda road, Dhanmondi, Dhaka. It offers Honors and Masters
            degree programs as well as higher secondary education. The college
            is affiliated with the National University of Bangladesh.
          </p>
        </div>
        {/* End description */}
        <div className="news_share">
          <span>Share:</span>
          <Social />
        </div>
        {/* End news share */}
      </div>
    </div>
  );
};

export default ModalThree;
