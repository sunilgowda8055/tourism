import React from "react";
import { Search } from "react-bootstrap-icons";
import PopularLoction from "../Sections/popularLoction";
import PriceDetels from "../Sections/PriceDetels";
import Image from "../Sections/image";
import Review from "../Sections/Review";
import Video from "../Sections/Video";
import YourStory from "../Sections/YourStory";
import Card from "../Sections/card";
import Scroll from "../Sections/Scroll";
import Swiper from "../Sections/Swiper";
// import swiper from "../Sections/Swiper";

function Home() {
  return (
    <div>
      {/* <---------carousel section-----> */}
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div
            className="carousel-inner text-center "
            style={{ position: "relative", height: "450px" }}
          >
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1464964165638-96827ce7e617?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                style={{ height: "500px", objectFit: "cover", opacity: 0.8 }}
                alt="..."
              />
              <div
                className="carousel-caption "
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h1 className="fs-1">Explore The World Around You</h1>
                <p>
                  Take a little break from the work strss of everyday. Discover
                  plan trip and explore beautiful destinations.
                </p>
                <div>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2 p-2 w-70 fs-4"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-danger fs-4 p-2 "
                      type="submit"
                    >
                      <Search size={40} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1683120698590-7e21c5ff1b5b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100 "
                style={{ height: "500px", objectFit: "cover", opacity: 0.8 }}
                alt="..."
              />

              <div
                className="carousel-caption d-none d-md-block"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h1>Discover Beautiful Place with TourCrown</h1>
                <p>
                  Take a little break from the work strss of everyday. Discover
                  plan trip and explore beautiful destinations.
                </p>
                <button className="btn btn-info p-2 w-50 fs-4">
                  Explore More
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1607068891828-f16297950a66?q=80&w=1502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                style={{ height: "500px", objectFit: "cover", opacity: 0.8 }}
                alt="..."
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h1>Starts Your Trip with TourCrown</h1>
                <p>
                  Take a little break from the work strss of everyday. Discover
                  plan trip and explore beautiful destinations.
                </p>
                <button className="btn btn-info p-2 w-50 fs-4">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Scroll />
      <Card />
      <Swiper />
      <PopularLoction />
      <Review />
      <Image />
      <YourStory />
      <Video />
      <PriceDetels />
    </div>
  );
}

export default Home;
