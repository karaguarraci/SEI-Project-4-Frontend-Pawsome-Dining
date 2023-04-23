import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signup_background_image from "../assets/dog-face.jpg";
import { API_URL } from "../consts.js";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
  });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("Submit button clicked");
    // console.log(`This is the form data ${JSON.stringify(formData)}`);
    try {
      await axios.post(`${API_URL}/auth/register/`, formData);
      navigate("/login");
    } catch (e) {
      console.log(e);
      setShowError(true);
      console.log(formData);
    }
  };
  return (
    <div className="form_page">
      <img
        src={signup_background_image}
        alt="Background image"
        className="form_background_image"
      />
      <form className="sl_form bone-shape" onSubmit={onSubmit}>
        <h3 className="form_header">Register</h3>
        <input
          className="input_text first_input"
          type="text"
          value={formData.username}
          placeholder="Username"
          name="username"
          onChange={onChange}
        ></input>
        <input
          className="input_text"
          type="email"
          value={formData.email}
          placeholder="Email"
          name="email"
          onChange={onChange}
        ></input>
        <input
          className="input_text"
          type="text"
          value={formData.first_name}
          placeholder="First Name"
          name="first_name"
          onChange={onChange}
        ></input>
        <input
          className="input_text"
          type="text"
          value={formData.last_name}
          placeholder="Surname"
          name="last_name"
          onChange={onChange}
        ></input>
        <input
          className="input_text"
          type="password"
          value={formData.password}
          placeholder="Password"
          name="password"
          onChange={onChange}
        ></input>
        <input
          className="input_text"
          type="password"
          value={formData.password_confirmation}
          placeholder="Confirm Password"
          name="password_confirmation"
          onChange={onChange}
        ></input>
        <button type="submit">Sign up</button>
        <p onClick={() => navigate("/login")}>Already have an account? </p>
      </form>
      {showError && (
        <div className="container p-5 serror">
          <div
            className="alert alert-danger alert-dismissible fade show signuperror"
            role="alert"
          >
            <strong>Something went wrong...</strong>
            <button
              type="button"
              className="close sclosebutton"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowError(false)}
            >
              <span aria-hidden="True">&times;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
