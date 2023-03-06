import React from "react";

const Address = () => {
  return (
    <ul className="wrapper">
      <li data-aos="fade-right" data-aos-duration="1200">
        <div className="list_inner">
          {/* End icon */}
          <div className="content">
            <h3>Phone</h3>
            <ul>
              <li>
                <p>Personal Number</p>
              </li>
              <li>
                <a href="Tel: +8801929273397">+8801929273397</a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
        <div className="list_inner">
          {/* End icon */}
          <div className="content">
            <h3>Email</h3>
            <ul>
              <li>
                <a href="naimsiddiqueesagor@oursolution.tech">
                  naimsiddiqueesagor@oursolution.tech
                </a>
              </li>
              <li>
                <a href="sagorsarder.ss@gmail.com">
                  sagorsarder.ss@gmail.com
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
        <div className="list_inner">
          {/* End icon */}
          <div className="content">
            <h3>Address</h3>
            <ul>
              <li>
                <p>
                  Banaripara,
                  <br />
                  Barishal, Bangladesh
                </p>
              </li>
            </ul>
          </div>
          {/* End .content */}
        </div>
      </li>
    </ul>
  );
};

export default Address;
