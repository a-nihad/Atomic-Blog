import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

const PostContext = createContext();

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 20 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  function handlePosts(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleclear() {
    setPosts([]);
  }

  // searching
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handlePosts,
        onClearPost: handleclear,
        searchQuery,
        setSearchQuery,
        createRandomPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePost() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, usePost };
