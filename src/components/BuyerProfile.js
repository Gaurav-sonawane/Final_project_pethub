import React, { useEffect, useState } from "react";
import "./profile.css";
import Bottom from "./Bottom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function BuyerProfile() {
  // const sess = sessionStorage.getItem("userSession");
  // const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  // const loggedInUser = JSON. parse(localStorage. getItem("user"));
  const sess = sessionStorage.getItem("user");
  console.log("data of user");
  console.log(sess);
  console.log("pases data");
  console.log(JSON.parse(sess));
  const loggedInUser = JSON.parse(sess);
  // const foundUser = JSON.parse(loggedInUser);
  // console.log(loggedInUser);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const selector = useSelector((state) => state.simpleReducer.login);
  console.log(selector);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch({ type: "LOGIN", payload: false });
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fas fa-paw"></i>
            PETHUB
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <>
              {" "}
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/allpets"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Buy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/alltrainer"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Trainer
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/allAnimalShelter"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Animal Shelter
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/allpetcaretaker"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Pet CareTaker
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/allveterinary"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Veterinary
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-links" onClick={HandleLogout}>
                  Logout
                </Link>
              </li>
            </>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right top, #208322, #1b732c, #1c6332, #205333, #254332)",
        }}
      >
        <div class="container vh-100 w-50">
          <div class="row d-flex justify-content-center mt-4">
            <div class="col-md-10 mt-5 pt-5">
              <div class=" z-depth-3">
                <div class="col-sm-12 bg-success rounded-left">
                  <div class="card-block text-center text-white">
                    <i class="fas fa-id-card fa-7x mt-5 mb-5"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-md-10 ">
              <div class=" z-depth-3">
                <div class="col-sm-12 bg-white rounded-right pb-3">
                  <h3 class=" p-2 text-center font-weight-bold">
                    <b>PROFILE CARD</b>
                  </h3>
                  <hr class="badge-primary mt-0 " />
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="font-weight-bold">
                        {/* Full Name : {sess != null ? loggedInUser.fname : "name"} */}
                        Full Name : {loggedInUser.fname} {loggedInUser.lname}
                      </h3>
                    </div>
                  </div>
                  <hr class="bg-primary" />
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="font-weight-bold">
                        {/* Email ID : {sess != null ? userdata.email : "email"} */}
                        Email ID : {loggedInUser.email}
                      </h3>
                    </div>
                  </div>
                  <hr class="bg-primary" />
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="font-weight-bold">
                        {/* City:{sess != null ? userdata.city : "city"} */}
                        Phone No :{loggedInUser.phone_no}
                      </h3>
                    </div>
                  </div>
                  <hr class="bg-primary" />
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="font-weight-bold">
                        {/* Phone : {sess != null ? userdata.phone : "phone"} */}
                        Adhar No : {loggedInUser.aadhaar_no}
                      </h3>
                      <hr />
                      <button className="btn btn-primary">
                        <Link to="/buyerpetdisp" className="text-white">
                          View Pet
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default BuyerProfile;
