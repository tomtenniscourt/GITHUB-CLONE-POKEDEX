import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav style={{ fontFamily: "Courier New", fontSize: "18px" }}>
      <Link to="/" style={{ color: "darkblue" }}>
        Home
      </Link>
      {/* &nbsp; | &nbsp; */}
      <Link to="/Favourites" style={{ color: "darkblue" }}>
        Favourites
      </Link>
      {/* &nbsp; | &nbsp; */}
      <Link to="/AdditionalContent" style={{ color: "darkblue" }}>
        Additional Content
      </Link>
      {/* &nbsp; | &nbsp; */}
      <Link to="/About" style={{ color: "darkblue" }}>
        About
      </Link>
    </nav>
  );
}
