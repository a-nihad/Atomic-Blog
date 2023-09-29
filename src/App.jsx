import { useEffect, useState } from "react";
import { PostProvider } from "./components/PostContext";

import Button from "./components/Button";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(false);

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

      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
