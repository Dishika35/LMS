import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Contact = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="mb-4">Contact Us</h1>

        {/* Accordion Component */}
        <div className="accordion" id="contactAccordion">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Any Queries
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#contactAccordion">
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet eros ex, in commodo metus tincidunt vitae. Cras sed placerat odio. Vivamus sit amet malesuada risus. Fusce condimentum mollis nunc, et consequat purus pellentesque eu. Donec porttitor et eros ut vulputate.
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Know More
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#contactAccordion">
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet eros ex, in commodo metus tincidunt vitae. Cras sed placerat odio. Vivamus sit amet malesuada risus. Fusce condimentum mollis nunc, et consequat purus pellentesque eu. Donec porttitor et eros ut vulputate.
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Follow Us On
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#contactAccordion">
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet eros ex, in commodo metus tincidunt vitae. Cras sed placerat odio. Vivamus sit amet malesuada risus. Fusce condimentum mollis nunc, et consequat purus pellentesque eu. Donec porttitor et eros ut vulputate.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
