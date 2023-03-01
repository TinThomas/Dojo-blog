import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(26);

  const handleClick = () => {
    setName("Luigi");
    setAge(27);
  }

  const handleOtherClick = (name, e) => {
    console.log("Hello " + name + ", your click event target is: ", e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={(e) => {
        handleOtherClick("Lea", e);
      }}>Click me too!</button>
    </div>
  );
}

export default Home;