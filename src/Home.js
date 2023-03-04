import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "My new website", body: "lorem ipsum", author: "Thomas", id: 1},
    {title: "Welcome party!", body: "lorem ipsum", author: "Lea", id: 2},
    {title: "Web dev for cool kids", body: "lorem ipsum", author: "Thomas", id: 3},
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs"/>
      <BlogList blogs={blogs.filter((blog) => blog.author === "Thomas")} title="Thomas' blogs"/>
    </div>
  );
}

export default Home;