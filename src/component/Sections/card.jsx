import React from "react";
import { Data } from "../data";
function Card() {
  return (
    <>
      <div className="text-center m-5 Foreign-trips">
        <h1>Recommended Foreign Trips</h1>
        <h5>
          Tour Crown's Top Picks: Most Recommended International Tours for Your
          Ultimate Adventure!
        </h5>
      </div>
      <div className="container d-flex  flex-wrap">
        {Data.map((ele) => {
          return (
            <li key={ele.id} className="Foreign-Trips-list">
              <div
                className="card m-3 rounded-pill card-pill"
                style={{ height: "16rem", overflow: "hidden" }}
              >
                <img
                  src={ele.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "70%" }}
                />
                <div className="card-body">
                  <p className="card-text text-center text-uppercase">
                    {ele.place}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </div>
      <div className="d-flex justify-content-center align-items-center m-5">
        <button className="btn btn-info p-3 w-50 fs-4">Explore More</button>
      </div>
    </>
  );
}

export default Card;
