function Search({ searchQuery, onSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={searchQuery}
      onChange={(e) => onSearchQuery(e.target.value)}
    />
  );
}

export default Search;
