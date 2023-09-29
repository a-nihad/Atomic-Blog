import { useContext } from "react";
import { PostContext } from "../App";

function Search() {
  const { searchQuery, setSearchQuery } = useContext(PostContext);
  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default Search;
