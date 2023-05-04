import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ signInUser }) => {
  const [user, setUser] = useState({ name: "", image: "" });
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.name) {
      navigate("/todolist");
    }
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setUser({ ...user, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const openFileDialog = () => {
    inputRef.current.click();
  };

  const saveUser = () => {
    localStorage.setItem("user", JSON.stringify(user));
    signInUser(user);
    navigate("/todolist");
  };

  return (
    <section className="signIn">
      <form>
        <h1>Get Started</h1>
        <h5>add a photo</h5>
        <div className="user-img" onClick={openFileDialog}>
          {user.image && <img src={user.image} />}
          <input
            type="file"
            accept="image/*"
            id="image-upload"
            onChange={handleImageChange}
            ref={inputRef}
            style={{ display: "none" }}
          />
        </div>
        <label htmlFor="input">
          fill in your name
          <input
            type="text"
            placeholder="your name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </label>
        <button onClick={saveUser} disabled={!user.name || !user.image}>
          Sign In
        </button>
      </form>
    </section>
  );
};
export default SignIn;
