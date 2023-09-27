import { useState } from "react";
import Button from "./Button";

function FormAddPosts({ onPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onPosts({ title, body });
    setTitle("");
    setBody("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button> Add post </Button>
    </form>
  );
}

export default FormAddPosts;
