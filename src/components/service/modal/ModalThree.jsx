import React from "react";
import Slider from "react-slick";

const ModalThree = () => {
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
                      src="img/service/shipped/shipped.png"
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
                      src="img/service/shipped/shipped1.png"
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
                      src="img/service/shipped/shipped2.png"
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
                      src="img/service/shipped/shipped3.png"
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
          <a
            href="https://www.sohosro.com/"
            className="sohosro_Hlink"
            target="_blank"
          >
            Shipped 2 U
          </a>
        </h3>
        <p>
        “Shipped 2 U” is an Import/Export business that is established in 2021 by the Honourable chairman “Naim Siddiquee Sagor”. The Export/Import business is primarily an expansion of trade boundaries wherein several business models exist. “Shipped 2 U” is one of them. The products are imported from foreign countries, and export from Bangladesh to other countries. “Shipped 2 U” is always reliable to their customers in order to capture value from customers in return.
        </p>
        
      </div>
    </div>
  );
};

export default ModalThree;
