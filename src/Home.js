import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "My new website", body: "lorem ipsum", author: "Thomas", id: 1},
    {title: "Welcome party!", body: "lorem ipsum", author: "Lea", id: 2},
    {title: "Web dev for cool kids", body: "lorem ipsum", author: "Thomas", id: 3},
  ]);

  const [name, setName] = useState("Thomas");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog =>blog.id !== id)
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log("Use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === "Thomas")} title="Thomas' blogs" handleDelete={handleDelete}/>
      <button onClick = {() => setName("Luigi")}>Change name</button>
      <p>{name}</p>
    </div>
  );
}

export default Home;