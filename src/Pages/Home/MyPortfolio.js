import data from "../../data/index.json";
import project3 from "../../asset/portfolio-design.png";
import project1 from "../../asset/to-do-list.png";
import project2 from "../../asset/changing-colors.png";
import "./myportfolio.css";

// Define portfolio data for various categories
const myPortfolio = {
  project1,
  project2,
  project3,
};

function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>

        <div>
          <button className="btn btn--github">
            <a
              style={{ hover: { color: "white" } }}
              href="https://github.com/DASH4274"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              activeClass="navbar--active-content"
            >
              Visit My GitHub
            </a>
          </button>
        </div>
      </div>

      {/* Front-End Projects Section */}
      <div>
        {/* <div className="portfolio--section--header">
          <h3 className="portfolio--category-title">Full-stack Development</h3>
        </div> */}
        <div className="portfolio--section--container">
          {data?.portfolio?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img
                  width={50}
                  height={300}
                  src={myPortfolio[item.src]}
                  alt="project-thumbnail"
                />
              </div>
              <div className="portfolio--section--card--content">
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyPortfolio;
