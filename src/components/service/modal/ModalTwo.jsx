import React from "react";
import Slider from "react-slick";

const ModalTwo = () => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: true,
          draggable: true,
          speed: 500,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="popup_informations">
      <div className="gallery_zoom">
        <ul data-aos="fade-right" data-aos-duration="1200">
          <Slider {...settings}>
            <li>
              <div>
                <a>
                  <img
                    src="img/service/urejabo/urejabo.png"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
                </a>
              </div>
            </li>
            {/* End li */}

            <li>
              <div>
                <a>
                  <img
                    src="img/service/urejabo/urejabo1.png"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
                </a>
              </div>
            </li>
            {/* End li */}

            <li>
              <div>
                <a>
                  <img
                    src="img/service/urejabo/urejabo2.png"
                    data-tip
                    data-for="facebook"
                    alt="portfolio"
                  />
                </a>
              </div>
            </li>
            {/* End li */}

            <li>
              <div>
                <a>
                  <img
                    src="img/service/urejabo/urejabo3.png"
                    data-tip
                    data-for="youtube"
                    alt="portfolio"
                  />
                </a>
              </div>
            </li>
            {/* End li */}
            {/* End li */}
          </Slider>
        </ul>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>
          {" "}
          <a
            href="https://www.sohosro.com/"
            className="sohosro_Hlink"
            target="_blank"
          >
            Urejabo
          </a>
        </h3>
        <p>
          Ure-Jabo is a courier service that provides logistic support to its
          own mother company Sohosro.com. It launched its journey in 2022 with
          delivery Support inside Dhaka city. The company Sohosro.com wants to
          elaborate its (Ure-Jabo) service across Bangladesh. The Chairman of
          the company “Naim Siddiquee Sagor” said Initially, we start delivering
          in the Dhaka city, later we have plan to expand this business all over
          Bangladesh as well as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ModalTwo;
