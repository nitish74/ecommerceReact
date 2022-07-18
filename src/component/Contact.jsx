import React from "react";
import img from "./img.jpg";

const Contact = () => {
  return (
    <div className="nk">
      <div className="card bg-dark text-white border-0">
        <img
          src={img}
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              SHOPPING
            </h5>
            <p className="card-text lead fs-2"></p>
            <p> Read Socials verfied</p>
            <p class="mb-0">
              <br />
              <a href="http://www.facebook.com" target="_blank">
                <img
                  alt="Siguenos en Facebook"
                  src="https://lh3.googleusercontent.com/-NSLbC_ztNls/T6VX0g6z8AI/AAAAAAAAA0A/_vyIBrmZbuY/s48/facebook48.png"
                  width="48"
                  height="48"
                />
              </a>
              <a href="/Home" target="_blank">
                <img
                  alt="Siguenos en Instagram"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                  width="48"
                  height="48"
                />
              </a>
              <a href="/Home" target="_blank">
                <img
                  alt="Siguenos en Linked In"
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  width="48"
                  height="48"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
