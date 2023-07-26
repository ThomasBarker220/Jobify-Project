import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components/index";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby yr lo-fi roof party, meh poutine skateboard lomo pork belly
            street art portland sriracha pabst. Intelligentsia paleo edison
            bulb, mixtape la croix pickled cloud bread put a bird on it.
            Drinking vinegar umami lyft before they sold out. Echo park viral
            aesthetic iceland offal praxis swag cronut whatever skateboard
            poutine neutral milk hotel squid art party. Pug ennui pop-up, cred
            waistcoat raw denim bodega boys readymade food truck live-edge pork
            belly coloring book.
          </p>
          <Link to={"/register"} className="btn register-link">
            Register
          </Link>
          <Link to={"/login"} className="btn demo-link">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
