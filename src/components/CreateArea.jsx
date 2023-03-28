import { useState } from "react";

export default function CreateArea(props) {
  const [text, setText] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
  }
  function submitNote() {}
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}
