import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_button from "../../assets/play_icon.png";
import info_button from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero_caption">
          <img src={hero_title} alt="" className="caption_img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className="hero_btns">
            <button className="btn">
              <img src={play_button} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_button} alt="" />
              More Info
            </button>
          </div>
          <TitleCards className="first-title-cards" />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"popular"} />
        <TitleCards title={"Only on Netflix"} category={"top_rated"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top picks for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
