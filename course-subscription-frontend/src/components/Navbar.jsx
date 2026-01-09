import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  if (!token) return null;

  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.info("Logged out successfully");
    navigate("/");
  };

  const linkClass = (path) =>
    `relative font-medium transition
     ${
       location.pathname === path
         ? "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-white"
         : "text-white/80 hover:text-white"
     }`;

  return (
    <nav
      className="sticky top-0 z-50
                 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600
                 px-10 py-4 flex items-center shadow-lg"
    >
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide text-white">
        CourseHub
      </h1>

      {/* Links */}
      <div className="ml-12 flex space-x-10">
        <Link to="/home" className={linkClass("/home")}>
          Home
        </Link>
        <Link to="/my-courses" className={linkClass("/my-courses")}>
          My Courses
        </Link>
      </div>

      {/* Logout */}
      <button
        onClick={logoutHandler}
        className="ml-auto px-5 py-2 rounded-full font-semibold
                   bg-white text-purple-600
                   hover:bg-gray-100 transition"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
