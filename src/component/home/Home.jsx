import React from "react";
import banner_img from "../../assets/banner.png";
import "/src/component/home/Home.css";

const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="left">
            <small className="offer-info">Sale up to 70% off</small>
            <div className="text">
              <h1 className="hero-text">New Collection For Fall</h1>
              <p>Discover all the new arrivals of ready-to-wear collection.</p>
            </div>
            <a className="btn-primary" href="">
              SHOP NOW
            </a>
          </div>
          <div className="right">
            <div className="image">
              <img className="hero-img" src={banner_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
