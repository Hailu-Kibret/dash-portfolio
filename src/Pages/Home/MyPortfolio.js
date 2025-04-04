import React from "react";
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
          <p className=" sub--title">Recent Projects</p>
          <h2 className="section--title">My Portfolio</h2>
        </div>

        <div>
          <button className="btn btn--github">
            <a
              href="https://github.com/DASH4274"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Visit My GitHub
            </a>
          </button>
        </div>
      </div>

      {/* Projects Section */}
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={myPortfolio[item.src]} alt={item.title} />
            </div>
            <div className="portfolio--section--card--content">
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
              <ul className="tech-list">
                {item.technologies.map((tech, i) => (
                  <li key={i} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyPortfolio;
