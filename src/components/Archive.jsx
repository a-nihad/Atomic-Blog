import { useState } from "react";
import Button from "./Button";

function Archive({ createRandomPost, onPosts }) {
  const [showArchive, setShowArchive] = useState(false);
  const [posts] = useState(() =>
    Array.from({ length: 200 }, () => createRandomPost())
  );
  return (
    <aside>
      <h2> POST ARCHIVE</h2>
      <Button onClick={() => setShowArchive((showArchive) => !showArchive)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </Button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong> {post.title} </strong> {post.body}
              </p>
              <Button onClick={() => onPosts(post)}> Add as new post </Button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Archive;
