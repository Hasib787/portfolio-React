import React from "react";

const ModalFour = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/city_bank.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>City Agent Bank</h3>
        <p>
          With a view to spread banking facilities to the root level throughout
          the country, Honourable “Naim Siddiquee Sagor” brings an agent banking
          outlet in Cakhar, Banaripara, Barishal. “Naim Siddiquee Sagor” said,
          “This new agent outlet will provide a wide range of services including
          cash deposit and withdrawal, balance enquiry, inward foreign
          remittance disbursement, fund transfer, utility bill payment and
          specially Microcredit facilities. Now enjoy the banking facilities at
          your reach.
        </p>
      </div>
    </div>
  );
};

export default ModalFour;
