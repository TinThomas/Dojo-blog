import './App.css';
import Navbar from './Navbar';

function App() {
  const title = "Welcome to the blog";
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        <p>{Math.random() * 10}</p>

        <a href={link}>Google homepage</a>
      </div>
    </div>
  );
}

export default App;
