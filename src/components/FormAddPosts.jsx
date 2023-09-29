import { useContext, useState } from "react";
import Button from "./Button";
import { usePost } from "./PostContext";

function FormAddPosts() {
  const { onAddPost } = usePost();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPost({ title, body });
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
