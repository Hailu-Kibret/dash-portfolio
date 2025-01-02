import data from "../../data/index.json";
import project3 from "../../asset/portfolio-design.png";
import project1 from "../../asset/to-do-list.png";
import project2 from "../../asset/changing-colors.png";

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

        {/* <div><button className="btn btn--github">
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
        </div> */}
      </div>

      {/* Front-End Projects Section */}
      <div>
        <div className="portfolio--section--header">
          <h3 className="portfolio--category-title">Front-End Development</h3>
        </div>
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

      {/* UX/UI Design Section */}
      <div>
        <div className="portfolio--section--header">
          <h3 className="portfolio--category-title">UX/UI Design</h3>
        </div>
        <div className="portfolio--section--container">
          {data?.uxuidesign?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img
                  width={50}
                  height={300}
                  src={item.src}
                  alt="UX/UI Design Thumbnail"
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

      {/* Video Editing Section */}
      <div>
        <div className="portfolio--section--header">
          <h3 className="portfolio--category-title">Video Editing</h3>
        </div>
        <div className="portfolio--section--container">
          {data?.videoediting?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <iframe
                  width="300"
                  height="200"
                  src={item.src}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="portfolio--section--card--content">
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graphics Design Section */}
      <div>
        <div className="portfolio--section--header">
          <h3 className="portfolio--category-title">Graphics Design</h3>
        </div>
        <div className="portfolio--section--container">
          {data?.graphicsdesign?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img
                  width={50}
                  height={300}
                  src={item.src}
                  alt="Graphics Design Thumbnail"
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
