import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario");

  const handleClick = () => {
    setName("Luigi");
  }

  const handleOtherClick = (name, e) => {
    console.log("Hello " + name + ", your click event target is: ", e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={(e) => {
        handleOtherClick("Lea", e);
      }}>Click me too!</button>
    </div>
  );
}

export default Home;