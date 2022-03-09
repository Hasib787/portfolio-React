import React from "react";
import Slider from "react-slick";

const ModalOne = () => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
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
                      src="img/service/sohosro/sohosro1.png"
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
                      src="img/service/sohosro/sohosro2.png"
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
                      src="img/service/sohosro/sohosro3.png"
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
                      src="img/service/sohosro/sohosro4.png"
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
        <h3 className="sohosro_title">
          <a
            href="https://www.sohosro.com/"
            className="sohosro_Hlink"
            target="_blank"
          >
            Sohosro
          </a>
        </h3>
        <p>
          “Sohosro.com” An E-Commerce Platform that was established by the
          honourable chairman “Naim Siddiquee Sagor” in 2021. This E-commerce
          site has early developed into an established marketplace for
          customers. Sohosro offers to their customers trendy and reliable
          shopping with all favorite brands and more. Now shopping is easier,
          faster and always joyous.
        </p>
      </div>
    </div>
  );
};

export default ModalOne;
