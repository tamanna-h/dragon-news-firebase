
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import AuthContext, { useAuth } from "../provider/AuthProvider.jsx";

const Navbar = () => {
const { user } = useAuth();
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="" />
        <Link to='/auth/login' className="btn btn-primary px-10 ">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
