import { useState } from "react";
import AddNote from "../notes-app/AddNote";
import NotesList from "../notes-app/NotesList";

const Notes = () => {
  const [task, setTask] = useState([]);

  const addNote = (title, details) => {

    const copyTask = [...task];
    copyTask.push({ title, details })
    setTask(copyTask)
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-white">Notes App</h1>
      <div className="h-screen lg:flex bg-black text-white">
        <AddNote addNote={addNote} />
        <NotesList task={task} deleteNote={deleteNote} />
      </div>
    </>
  );
};

export default Notes;