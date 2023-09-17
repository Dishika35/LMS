import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const handleButtonClick = (language) => {
    alert(`You clicked the button for ${language}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Programming Languages</h1>

      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?html" className="card-img-top" alt="JavaScript" />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text">
                HTML is a versatile programming language that is commonly used for web development.
              </p>
              <button className="btn btn-primary" onClick={() => handleButtonClick('JavaScript')}>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?python" className="card-img-top" alt="Python" />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
              <p className="card-text">
                Python is a high-level programming language known for its simplicity and readability.
              </p>
              <button className="btn btn-primary" onClick={() => handleButtonClick('Python')}>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?java" className="card-img-top" alt="Java" />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text">
                Java is a widely used, object-oriented programming language suitable for a variety of applications.
              </p>
              <button className="btn btn-primary" onClick={() => handleButtonClick('Java')}>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?C++" className="card-img-top" alt="C++" />
            <div className="card-body">
              <h5 className="card-title">C++</h5>
              <p className="card-text">
                C++ is a powerful programming language often used for system software, game development.
              </p>
              <button className="btn btn-primary" onClick={() => handleButtonClick('C++')}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
