const Home = () => {

  const handleClick = (e) => {
    console.log("Here's the event: ", e);
  }

  const handleOtherClick = (name, e) => {
    console.log("Hello " + name + ", your click event target is: ", e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={(e) => {
        handleOtherClick("Lea", e);
      }}>Click me too!</button>
    </div>
  );
}

export default Home;