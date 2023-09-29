import { useContext } from "react";
import { usePost } from "./PostContext";

import Title from "./Title";
import Results from "./Results";
import Search from "./Search";
import Button from "./Button";

function Header() {
  const { onClearPost } = usePost();
  return (
    <header>
      <Title />
      <div>
        <Results />
        <Search />
        <Button onClick={onClearPost}> Clear posts </Button>
      </div>
    </header>
  );
}

export default Header;
