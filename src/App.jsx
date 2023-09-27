import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import Button from "./components/Button";
import FormAddPosts from "./components/FormAddPosts";
import Header from "./components/Header";
import Main from "./components/Main";
import Results from "./components/Results";
import Posts from "./components/Posts";
import Search from "./components/Search";
import Title from "./components/Title";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 20 }, () => createRandomPost())
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = useState(false);

  function handlePosts(post) {
    setPosts((posts) => [post, ...posts]);
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

  function handleclear() {
    setPosts([]);
  }

  useEffect(
    function () {
      document.documentElement.classList.toggle("dark-mode");
    },
    [isDark]
  );

  return (
    <section>
      <Button
        onClick={() => setIsDark((isDark) => !isDark)}
        className="btn-dark-mode"
      >
        {isDark ? "☀️" : "🌙"}
      </Button>

      <Header>
        <Title />
        <div>
          <Results posts={searchedPosts} />
          <Search searchQuery={searchQuery} onSearchQuery={setSearchQuery} />
          <Button onClick={handleclear}> Clear posts </Button>
        </div>
      </Header>

      <Main>
        <FormAddPosts onPosts={handlePosts} />
        <Posts posts={searchedPosts} />
      </Main>

      <Archive
        createRandomPost={createRandomPost}
        onPosts={handlePosts}
      ></Archive>

      <Footer />
    </section>
  );
}

export default App;
