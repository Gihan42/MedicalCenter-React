import React, { ChangeEvent, Component } from "react";
import Header from "../../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bgImage from "../../assets/26357.jpg";
import Card from "../../components/Card/Card";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios";

type DoctorDetails = {
  DId: string;
  DName: string;
  position: string;
  time: string;
  contact: string;
  DCharge: number;
  wardNo: number;
};
type DoctorProps = {};
type DoctorState = {
  DoctorList: DoctorDetails[];
  DId: string;
  DName: string;
  position: string;
  time: string;
  contact: string;
  DCharge: number;
  wardNo: number;
  hospitals: [];
  doctors: [];
  spe: [];
};
export default class Doctors extends Component<DoctorProps, DoctorState> {
  constructor(props: DoctorProps) {
    super(props);
    this.state = {
      DoctorList: [],
      DId: "",
      DName: "",
      position: "",
      time: "",
      contact: "",
      DCharge: 0,
      wardNo: 0,
      hospitals: [],
      doctors: [],
      spe: [],
    };
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const inputValue = type == "number" ? parseInt(value) : value;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  componentDidMount(): void {
    // this.handleInput();
    this.loadHospital();
    this.loadDoctors();
    this.loadSpecialization();
  }
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { DId, DName, position, time, contact, DCharge, wardNo } = this.state;
    let newDoctor = {
      DId: DId,
      DName: DName,
      position: position,
      time: time,
      contact: contact,
      DCharge: DCharge,
      wardNo: wardNo,
    };
    axios
      .post("http://localhost:5000/api/v1/doctor", newDoctor)
      .then((res) => {
        // this.setState((prevState)=>({
        //     PatientList:[...prevState.PatientList, res.data.responseData]
        // }));

        console.log(res);
      })
      .catch((error) => {});
  };
  loadDoctors = () => {
    axios.get(`doctor/Doctor`).then((res) => {
      console.log(res.data.responseData + "positions");
      this.setState((prevState) => ({
        ...prevState,
        DoctorList: res.data.responseData,
      }));
    });
  };
  loadHospital = () => {
    axios.get(`doctor/Hospital`).then((res) => {
      console.log(res.data.responseData + "positions");
      this.setState((prevState) => ({
        ...prevState,
        hospitals: res.data.responseData,
      }));
    });
  };
  loadSpecialization = () => {
    axios.get(`doctor/Specialization`).then((res) => {
      console.log(res.data.responseData + "positions");
      this.setState((prevState) => ({
        ...prevState,
        spe: res.data.responseData,
      }));
    });
  };

  render() {
    return (
      <>
        <Header />
        <div
          className="mt-16 p-36 h-screen bg-cover flex justify-center items-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="border-gray-400 p-10  w-5/6 border-2 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-black">
            <div className="justify-center items-center flex">
              <h2 className="text-6xl text-green-700">Channel Your Doctor</h2>
              <div className=" relative ml-20 left-80 bottom-12  flex justify-center text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  fill="currentColor"
                  className="bi bi-person-add cursor-pointer hover:text-green-700 "
                  viewBox="0 0 16 16"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalToggle"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                </svg>
              </div>
            </div>
            <div className="justify-center items-center flex">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  className="nav-item text-2xl font-bold "
                  role="presentation"
                >
                  <button
                    className="nav-link active  "
                    id="pillsprofileHometab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    Doctors
                    
                  </button>
                </li>
                <li
                  className="nav-item text-2xl font-bold "
                  role="presentation"
                >
                  <button
                    className="nav-link "
                    id="pillsprofiletab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Specialization
                  </button>
                </li>
                <li className="nav-item text-2xl font-bold" role="presentation">
                  <button
                    className="nav-link "
                    id="navcontacttab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Hospital
                  </button>
                </li>
              </ul>
            </div>

            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="container text-center">
                  <div
                    className=" flex justify-center items-center"
                    id="premiumTab"
                  >
                    {this.state.DoctorList.map((doctor) => (
                      <Card
                        position="Doctor"
                        DName={doctor.DName}
                        DCharge={doctor.DCharge}
                        wardNo={doctor.wardNo}
                        time={doctor.time}

                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="container text-center">
                  <div
                    className="flex justify-center items-center"
                    id="generalTab"
                  >
                    {this.state.spe.map(() => (
                      <Card position="Specialization" DName="Sandun" DCharge={100} wardNo={5} time="12.30"/>
                    ))}
                    {/* <Card position={"Specialization"}/><Card position={"Specialization"}/><Card position={"Specialization"}/> */}
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="container text-center">
                  <div
                    className="flex justify-center items-center"
                    id="luxuryTab"
                  >
                    {this.state.hospitals.map(() => (
                      <Card position="Hospital" DName="Gihan" DCharge={100} wardNo={5} time="12.30" />
                    ))}

                    {/* <Card position={"Hospital"}/> <Card position={"Hospital"}/>  <Card position={"Hospital"}/>  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade p-40"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
        >
          <div
            className=" modal-dialog modal-dialog-centered  h-80 bg-white border-2  border-white rounded-3xl text-white "
            id="exampleModalToggleDiv"
          >
            <div className="modal-content p-5 h-80 w-56 justify-center items-center rounded-3xl bg-transparent   text-emerald-50">
              <form onSubmit={this.handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="DId"
                  label="Doctor Id"
                  name="DId"
                  autoFocus
                  type="text"
                  value={this.state.DId}
                  onChange={this.handleInput}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  label="Doctor Name"
                  name="DName"
                  autoFocus
                  value={this.state.DName}
                  onChange={this.handleInput}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="position"
                  label="position"
                  type="text"
                  id="position"
                  value={this.state.position}
                  onChange={this.handleInput}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="time"
                  label="Time"
                  type="text"
                  id="time"
                  value={this.state.time}
                  onChange={this.handleInput}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="contact"
                  label="contact"
                  type="text"
                  id="contact"
                  value={this.state.contact}
                  onChange={this.handleInput}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="DCharge"
                  label="DCharge"
                  type="number"
                  id="DCharge"
                  value={this.state.DCharge}
                  onChange={this.handleInput}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="wardNo"
                  label="WardNo"
                  type="number"
                  id="WardNo"
                  value={this.state.wardNo}
                  onChange={this.handleInput}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 2 }}
                >
                  Register
                </Button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
