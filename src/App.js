import React, { useState, useEffect } from "react";
import Post from "./components/Post";

const DATA_API_URL =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(DATA_API_URL);
      const data = await response.json();
      setPosts(data);
    })();
  }, []);

  console.log({ keys: posts.length ? Object.keys(posts[0]) : [] });
  console.log({ checker: posts.map((post) => post.tags) });

  return (
    <div
      className=""
      style={{
        marginTop: "20px",
      }}
    >
      <div className="row">
        {posts.map((post) => (
          <Post
            key={post.id}
            media={post.featured_media}
            link={post.link}
            title={post.title.rendered}
            author={post.author}
            date={new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            type={post.type}
            categories={post.categories}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
