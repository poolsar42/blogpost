import React, { useState, useEffect } from "react";
import Post from "./components/Post";

const DATA_API_URL =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      // simple fetch, don't want to use axios or other libraries
      // to not overload the project
      const response = await fetch(DATA_API_URL);
      const data = await response.json();
      setPosts(data);
    })();
  }, []);

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <div className="row u-equal-height u-clearfix">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              media={post.featured_media}
              link={post.link}
              title={post.title.rendered}
              author={post._embedded.author[0].name}
              authorLink={post._embedded.author[0].link}
              date={new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              type={
                // In the returen API object I didn't find any type property
                // So I manually added an Article type property
                "Article"
              }
              category={
                // In the returen API object I didn't find a better way to get the category
                post._embedded["wp:term"][2].length
                  ? post._embedded["wp:term"][2][0].name.toUpperCase()
                  : post._embedded["wp:term"][1][0].name.toUpperCase()
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
