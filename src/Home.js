const Home = () => {

  const handleClick = () => {
    console.log("You pressed the button!");
  }

  const handleOtherClick = (name) => {
    console.log("Hello " + name);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={() => {
        handleOtherClick("Lea");
      }}>Click me too!</button>
    </div>
  );
}

export default Home;