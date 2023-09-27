function PostCount({ posts = 0 }) {
  return <p> {posts.length} atomic posts found </p>;
}

export default PostCount;
