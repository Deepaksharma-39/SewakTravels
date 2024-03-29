import { Link } from "react-router-dom";
import Animation from "../../Common/Animation";
import TitleComponent from "../../Common/TitleComponent";

const CorporateContent = ({ side }) => {
    const imageData = [
        {
            src: "/assets/img/about/1.webp",
            title: "OutStation",
            subTitle: "water fall",
            path:"/outstation-cab-taxi-service"
          },
          {
            src: "/assets/img/about/2.webp",
            title: "Airport",
            subTitle: "paragliding",
            path:"/airport-cab-taxi-transport-service"
          },
          {
            src: "/assets/img/about/3.webp",
            title: "Corporate",
            subTitle: "River Front",
            path:"/employee-cab-taxi-transport-service"
          },
      ];
      return (
        <section className="about-section three-image about_page animated-section section-b-space">
          <Animation />
          <div className="container">
            <TitleComponent
              title={"Sewak Travels"}
              subTitle={"Services"}
              span={"Services"}
              titleClass={"title-3"}
            />
            <div className="row">
              <div className={`col-xl-7 ${side === "right" ? "order-xl-1" : ""}`}>
                <div className="image-section">
                  {imageData.map((image, index) => (
                    
                    <div key={index} className="img-box">
                      <img
                        src={image.src}
                        data-tilt
                        data-tilt-perspective="110"
                        data-tilt-speed="400"
                        data-tilt-max="1.2"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="title-box">
                      <Link to={image.path}>
                        <h3>{image.title}</h3>
                        </Link>
                      </div>
                    </div>
                    
                  ))}
                </div>
              </div>
              <div className="col-xl-5">
                <div className="about-text">
                  <div>
                    <h2> Corporate Services</h2>
                    <p>
                    Sewak Travels offers efficient employee transport solutions for businesses. With our reliable corporate cab services, ensure punctual and comfortable transportation for your employees, fostering productivity and convenience. Reach out to us for tailored employee transport services!
                    </p>
                    {/* <img
                      src="/assets/images/mix/signature.png"
                      className="img-fluid"
                      alt=""
                    /> */}
                    <div className="buttons-about">
                      <Link to="/employee-cab-taxi-transport-service/#corporate-booking" className="btn btn-lower btn-curve">
                        Book Now
                      </Link>
                      <Link
                        to={"/contact"}
                        className="btn btn-lower black-btn btn-curve"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  };
  
  export default CorporateContent;
  