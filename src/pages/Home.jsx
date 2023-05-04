import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Group3 from "../assets/Group3.png";
import "../sass/main.scss";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.name) {
      navigate("/todolist");
    }
  }, []);

  return (
    <section className="home">
      <img src={Group3} alt="" />
      <h1>Keep Track Of Daily Tasks In Life</h1>
      <button>
        <Link to="/signin">Get Started</Link>
      </button>
    </section>
  );
};

export default Home;
