import React, { useEffect, useState } from 'react';
import person from "../images/person.jpeg";
import aboutpic from "../images/person.png"
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };



  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"    //cookie backend me send krny k lye
      });

      const data = await res.json();
      setUserData(data);
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      history.push('/login');
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="container emp-profile">
      <form method="GET">
        <div className="row">
          <div className="col-md-4">
            {/* <img src={person} width={250} height={250} /> */}
            <img src={userData.name === "Muhammad Asad" ? person : aboutpic} alt="person pic" width={200} height={200} />
          </div>

          <div className="col-md-6">
            <div className="profile-head">
              <h5>{userData.name}</h5>
              <h6>{userData.work}</h6>
              <p className="profile-reting mt-3 mb-5">Ranking: <span>9/10</span></p>

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
                    <p>{userData._id}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    {/* {isEditing ? <input type="text" defaultValue="Asad Asghar" /> : <p>Asad Asghar</p>} */}
                  <p>{userData.name}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    {/* {isEditing ? <input type="text" defaultValue="mehrgee826@gmail.com" /> : <p>mehrgee826@gmail.com</p>} */}
                    <p>{userData.email}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    {/* {isEditing ? <input type="text" defaultValue="237492734" /> : <p>237492734</p>} */}
                    <p>{userData.phone}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    {/* {isEditing ? <input type="text" defaultValue="MERN Stack Dev" /> : <p>MERN Stack Dev</p>} */}
                    <p>{userData.work}</p>
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
