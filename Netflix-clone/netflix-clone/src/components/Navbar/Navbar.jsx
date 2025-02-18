import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileIcon from "../../assets/profile_img.png";
import dropDownIcon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="search-Icon" className="icons" />
        <p>Children</p>
        <img src={bellIcon} alt="Bell-Icon" className="icons" />
        <div className="navbar-profile">
          <img src={profileIcon} alt="profile-icon" className="icons" />
          <img src={dropDownIcon} alt="Drop-Down-Icon" />
          <div className="dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
