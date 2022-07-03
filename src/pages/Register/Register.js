import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.prevent.default();
  };
  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center" }}>Please register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your name" /> <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your email"
          required
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your password"
          required
        />{" "}
        <br />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-danger text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
