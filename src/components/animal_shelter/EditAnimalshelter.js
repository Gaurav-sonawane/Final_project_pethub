import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const EditAnimalshelter = (props) => {
  const [shelter, setShelter] = useState({
    shelterName: "",
    address: "",
    phone: "",
  });
  const [petData, setpetData] = useState(null);
  const [people, setPeople] = useState([]);
  const navigate = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setpetData({ ...petData, [name]: value });
  };
  React.useEffect(async () => {
    //

    await axios
      .get(
        `http://localhost:8082/api/animalshelter/getId?id=${
          props &&
          props.location &&
          props.location.state &&
          props.location.state.id
        }`
      )
      .then((response) => {
        console.log("RESPONSE", response.data);
        setpetData(response.data);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (shelter.shelterName && shelter.phone && shelter.address) {
    //   //   const newPerson = { ...shelter, id: new Date().getTime().toString() };
    //   //   setPeople([...people, newPerson]);
    axios
      .put("http://localhost:8082/api/animalshelter/updateShelter", {
        id: petData.id,
        name: petData.name,
        address: petData.address,
        phone: petData.phone,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Not working!!", error);
      });
    // setpetData({ shelterName: "", address: "", phone: "" });
    navigate.push("/allAnimalShelter");
  };
  console.log(props, "display props");
  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-9">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Animal shelter's info
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="shelterName"
                              name="name"
                              className="form-control"
                              placeholder="Shelter Name"
                              value={petData && petData.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-home fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="address"
                              name="address"
                              className="form-control"
                              placeholder="Address"
                              value={petData && petData.address}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-phone fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="phone"
                              name="phone"
                              className="form-control"
                              placeholder="Phone No"
                              value={petData && petData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            {/* <Link to="/allAnimalShelter" className="nav-links"> */}
                            Good to Go!!
                            {/* </Link> */}
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://us.123rf.com/450wm/norwayblue/norwayblue1506/norwayblue150600003/41622270-a-woman-tenderly-holding-her-dog-and-a-cat-looking-up-.jpg?ver=6"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {people.map((person) => {
        const { id, shelterName, phone, address } = person;
        return (
          <div key={id}>
            <h4>{shelterName}</h4>
            <p>{address}</p>
            <p>{phone}</p>
          </div>
        );
      })}
    </>
  );
};

export default EditAnimalshelter;
