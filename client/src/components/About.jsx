import React, { useState } from 'react';
import person from "../images/person.png";

const About = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="container emp-profile">
      <form method="">
        <div className="row">
          <div className="col-md-4">
            <img src={person} alt="person pic" width={250} height={250}/>
          </div>

          <div className="col-md-6">
            <div className="profile-head">
              <h5>Asad Asghar</h5>
              <h6>Web Developer</h6>
              <p className="profile-reting mt-3 mb-5">Ranking: <span>1/10</span></p>

              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a href="#about" className="nav-link active" id="home-tab" data-toggle="tab" role="tab">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#profile" className="nav-link" id="profile-tab" data-toggle="tab" role="tab">
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <input
              type="button"
              className="profile-edit-btn"
              name="btnAddMore"
              value={isEditing ? "Cancel" : "Edit Profile"}
              onClick={toggleForm}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="profile-word">
              <p><b>Work link</b></p>
              <a href="https://github.com/mehargee" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <br />
              <a href="https://github.com/mehargee" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <br />
              <a href="https://github.com/mehargee" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <br />
              <a href="https://github.com/mehargee" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <br />
            </div>
          </div>

          <div className="col-md-8 pl-5 about-info">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-6">
                    <label>User ID</label>
                  </div>
                  <div className="col-md-6">
                    <p>37458678399043</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    {isEditing ? <input type="text" defaultValue="Asad Asghar" /> : <p>Asad Asghar</p>}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    {isEditing ? <input type="text" defaultValue="mehrgee826@gmail.com" /> : <p>mehrgee826@gmail.com</p>}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    {isEditing ? <input type="text" defaultValue="237492734" /> : <p>237492734</p>}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    {isEditing ? <input type="text" defaultValue="MERN Stack Dev" /> : <p>MERN Stack Dev</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
