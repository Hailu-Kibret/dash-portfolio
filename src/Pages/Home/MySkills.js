import React, { useState } from "react";
import data from "../../data/index.json";
import photo1 from "../../asset/Get my art printed on awesome products_ Support me….jpg";
import photo2 from "../../asset/UI UX Design Illustration.jpg";
import photo3 from "../../asset/Video Editor 3D Character Illustration.jpg";
import photo4 from "../../asset/Price Tag Clipart Transparent Background, Price Tag Graphic Design Template Vector Isolated, Price Tag Clipart, Tag, Icon PNG Image For Free Download.jpg";
import { FaCode, FaVideo, FaPaintBrush, FaLaptopCode } from "react-icons/fa";
import "./skillStyling.css";

function MySkills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const photos = { photo1, photo2, photo3, photo4 };

  const icons = {
    FaCode: <FaCode />,
    FaVideo: <FaVideo />,
    FaPaintBrush: <FaPaintBrush />,
    FaLaptopCode: <FaLaptopCode />,
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedSkill(null);
  };

  return (
    <section className="skills--section container" id="myskills">
      <div className="portfolio--container">
        <p className="section--title">My skills</p>
        <h2 className="skills--section--heading">My expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className="skills--section--card"
            onClick={() => handleSkillClick(item)}
          >
            <div className="skills--section--card--content">
              <div className="skills--section--icon">{icons[item.icon]}</div>

              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
              <ul className="tech-list">
                {item.techology.map((tech, i) => (
                  <li key={i} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && selectedSkill && (
        <div className="popup-overlay">
          <div className="popup-modal">
            <button className="popup-close" onClick={closePopup}>
              X
            </button>
            <div className="popup-content">
              <img
                src={photos[selectedSkill.src]}
                alt={selectedSkill.title}
                className="popup-image"
              />
              <h3 className="popup-title">{selectedSkill.title}</h3>
              <p className="popup-description">{selectedSkill.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MySkills;
