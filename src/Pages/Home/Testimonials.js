import data from "../../data/index.json";
import "./testimonial.css";
import yammy from "../../asset/yeamlakneh-testimonial.JPG";
import baslael from "../../asset/baslael-testimonial.jpg";
import eyobed from "../../asset/eyobed-testimonial.jpg";

const testimonialPhoto = {
  yammy,
  eyobed,
  baslael,
};

function Testimonials() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Clients Feedback</p>
          <h2 className="sections--heading">Customer Feedback</h2>
        </div>
      </div>
      <div className="testimonial--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--reviews">
              {Array.from({ length: 5 }, (reviews, index) => (
                <svg
                  class="star-svg"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 21 20"
                >
                  <g fill="#365486">
                    <path d="M10 1.5l2.926 5.93 6.547.953-4.737 4.616 1.117 6.52L10 15.968l-5.853 3.071 1.117-6.52-4.737-4.616 6.547-.953L10 1.5z" />
                  </g>
                </svg>
              ))}
            </div>
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <img src={testimonialPhoto[item.src]} alt="Avatar" />
              <div>
                <p className="text-md testimonial--author--name">
                  {" "}
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {" "}
                  {item.author_designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
