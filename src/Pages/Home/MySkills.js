import data from "../../data/index.json";
import photo1 from "../../asset/image-1.jpg";
import photo2 from "../../asset/image-2.jpg";
import photo3 from "../../asset/image-3.jpg";
import photo4 from "../../asset/image-4.jpg";
import React, { useState } from "react";

function MySkills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const photos = {
    photo1,
    photo2,
    photo3,
    photo4,
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
    <section className="skills--section" id="myskills">
      <div className="portfolio--container">
        <p className="section--title">My skills</p>
        <h2 className="skills--section--heading">My expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className="skills--section--card"
            onClick={() => handleSkillClick(item)} // Trigger popup on click
          >
            <img width={200} src={photos[item.src]} alt={item.title} />
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
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
