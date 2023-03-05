import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs").then(res => {
      if(!res.ok){
        throw Error("Could not fetch data for resource");
      }
      return res.json();
    }).then((data) =>{
      console.log(data);
      setBlogs(data);
      setIsLoading(false);
    }).catch((err) => {
      console.log(err.message);
    })
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs"/>}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Thomas")} title="Thomas' blogs"/>}
    </div>
  );
}

export default Home;