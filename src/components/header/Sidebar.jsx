import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

// logo name
const logo2 = "naim_logo";

// sidebar content
const sidebarContent = [
  { icon: "home", itemName: "Home", itemRoute: "#home", activeClass: "active" },
  { icon: "human", itemName: "About", itemRoute: "#about", activeClass: "" },
  {
    icon: "service",
    itemName: "Service",
    itemRoute: "#service",
    activeClass: "",
  },
  {
    icon: "photo_gallery",
    itemName: "Photo Gallery",
    itemRoute: "#photo",
    activeClass: "",
  },
  {
    icon: "quotes",
    itemName: " Some Words I Believe",
    itemRoute: "#quotes",
    activeClass: "",
  },
  {
    icon: "education",
    itemName: "Education",
    itemRoute: "#education",
    activeClass: "",
  },
  {
    icon: "contact",
    itemName: "Contact",
    itemRoute: "#contact",
    activeClass: "",
  },
];

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}
      <div
        className={click ? "edina_tm_sidebar menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <div className="logo">
            <Link to="/">
              <img
                onClick={scrollToTop}
                className="logo_light"
                src={`img/logo/${logo2}.png`}
                alt="brand"
              />
            </Link>
          </div>
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "service",
                "photo",
                "quotes",
                "education",
                "contact",
              ]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a
                        href={val.itemRoute}
                        className={val.activeClass}
                        onClick={handleClick}
                      >
                        <img
                          className="svg custom"
                          src={`img/svg/${val.icon}.svg`}
                          alt="icon"
                        />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

        </div>
      </div>
    </>
  );
};

export default Sidebar;
