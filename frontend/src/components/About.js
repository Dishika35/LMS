import React, { useState } from 'react';
import './About.css'; // Replace 'styles.css' with the path to your CSS file

const About = () => {
  const [selectedSection, setSelectedSection] = useState('section1');

  const handleDropdownClick = (section) => {
    setSelectedSection(section);
  
    // Smooth scroll to the selected section
    const element = document.getElementById(section);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  };
  

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>

      {/* Dropdown Component */}
      <div className="d-flex justify-content-end mb-3">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Option
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <button
                className={`dropdown-item ${selectedSection === 'section1' ? 'active' : ''}`}
                onClick={() => handleDropdownClick('section1')}
              >
                Section 1
              </button>
            </li>
            <li>
              <button
                className={`dropdown-item ${selectedSection === 'section2' ? 'active' : ''}`}
                onClick={() => handleDropdownClick('section2')}
              >
                Section 2
              </button>
            </li>
            <li>
              <button
                className={`dropdown-item ${selectedSection === 'section3' ? 'active' : ''}`}
                onClick={() => handleDropdownClick('section3')}
              >
                Section 3
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Sections */}
      <div className="row">
        <div className={`col-md-12 mb-4 ${selectedSection === 'section1' ? 'highlight' : ''}`} id="section1">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Mentors</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id turpis a justo pellentesque varius a sed ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare condimentum diam, eu tempus erat vulputate at. Nam at nunc libero. Morbi a imperdiet libero. </p>
            </div>
          </div>
        </div>

        <div className={`col-md-12 mb-4 ${selectedSection === 'section2' ? 'highlight' : ''}`} id="section2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Founder</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id turpis a justo pellentesque varius a sed ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare condimentum diam, eu tempus erat vulputate at. Nam at nunc libero. Morbi a imperdiet libero. </p>
            </div>
          </div>
        </div>

        <div className={`col-md-12 mb-4 ${selectedSection === 'section3' ? 'highlight' : ''}`} id="section3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Alumni</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id turpis a justo pellentesque varius a sed ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare condimentum diam, eu tempus erat vulputate at. Nam at nunc libero. Morbi a imperdiet libero. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
