import List from "./List";

function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <List post={post} key={i} />
      ))}
    </ul>
  );
}

export default Posts;
