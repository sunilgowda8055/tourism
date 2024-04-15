import React from "react";
import {
  BookmarkHeartFill,
  StarFill,
  StarHalf,
  Star,
} from "react-bootstrap-icons";

const data = [
  {
    id: "m1",
    img: "https://plus.unsplash.com/premium_photo-1705883267788-4040699634c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    names: "Janmenjaya biswal",
    dis: "The journey was expertly curated, offering awe-inspiring landscapes and rich cultural encounters. I couldn't be happierlandscapes and rich cultural encounters. I couldn't be happier",
  },

  {
    id: "m2",
    img: "https://images.unsplash.com/photo-1656734314129-cf4605fdf833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzMHx8YmVhY2glMjBiYWNrZ3JvdW5kJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    names: "Janmenjaya biswal",
    dis: "The journey was expertly curated, offering awe-inspiring landscapes and rich cultural encounters. I couldn't be happierlandscapes and rich cultural encounters. I couldn't be happier",
  },
  {
    id: "m3",
    img: "https://plus.unsplash.com/premium_photo-1692574096082-d2b425cf1a5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNjl8fHxlbnwwfHx8fHw%3D",
    names: "Janmenjaya biswal",
    dis: "The journey was expertly curated, offering awe-inspiring landscapes and rich cultural encounters. I couldn't be happierlandscapes and rich cultural encounters. I couldn't be happier",
  },
  {
    id: "m4",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
    names: "Janmenjaya biswal",
    dis: "The journey was expertly curated, offering awe-inspiring landscapes and rich cultural encounters. I couldn't be happierlandscapes and rich cultural encounters. I couldn't be happier",
  },
];
function Review() {
  return (
    <>
      <div id="revies-card-section">
        <div className="text-center">
          <h1>Loving Reviews By Our Customers</h1>
          <p>
            Cicero famously orated against his political opponent Lucius Sergius
            Catilina.
          </p>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="d-flex flex-wrap">
                {data.map((e) => {
                  return (
                    <div
                      key={e.id}
                      className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 g-2"
                    >
                      <div className="container">
                        <div className="card p-2 review-card">
                          <div className="row">
                            <div className="d-flex">
                              <img
                                src={e.img}
                                className="p-1 rounded-start col-sm-5"
                                alt={e.names}
                                style={{ width: "100px", height: "110px" }}
                              />
                              <div className="col-sm-5 m-0">
                                <h6>{e.names}</h6>
                                <p>Odisha</p>
                                <span>
                                  <StarFill color="yellow" />
                                  <StarFill color="yellow" />
                                  <StarFill color="yellow" />
                                  <StarHalf color="yellow" />
                                  <Star />
                                </span>
                              </div>
                              <div className="col-sm-2">
                                <BookmarkHeartFill color="yellow" size={36} />
                              </div>
                            </div>
                          </div>
                          <p className="p-2">{e.dis}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
