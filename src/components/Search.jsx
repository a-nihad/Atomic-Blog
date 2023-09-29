import { useContext } from "react";
import { usePost } from "./PostContext";

function Search() {
  const { searchQuery, setSearchQuery } = usePost();
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
