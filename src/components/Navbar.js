import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";

function Navbar({ login, setlogin }) {
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
    <>
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
            {selector && (
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
                {/* <li className="nav-item">
              <Link to="/#" className="nav-links" onClick={closeMobileMenu}>
                Sell
              </Link>
            </li> */}
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
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={HandleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}

            {!selector && (
              <>
                {" "}
                <li>
                  <Link
                    to="/signup"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>
                </li>
              </>
            )}
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
