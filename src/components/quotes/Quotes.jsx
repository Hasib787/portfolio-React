import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Quotes() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          autoplay: true,
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  const quotesContent = [
    {
      desc: `Enjoy your life without compering it’s to others. The only person you should try to beat, is the person you were yesterday.`,
    },
    {
      desc: `I prefer the person who tells me my mistakes in front of me, not the one who talks behind my back and I fear most the person who keeps silent even when he realizes my mistake.`,
    },
    {
      desc: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
    },
  ];

  return (
    <Slider {...settings}>
      {quotesContent.map((val, i) => (
        <li
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="list_inner">
            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End description */}
          </div>
        </li>
      ))}
    </Slider>
  );
}
