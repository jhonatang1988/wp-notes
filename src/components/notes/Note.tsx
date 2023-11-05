import type { notes as Note } from "@prisma/client";
import { useState } from "react";

export default function Note({ note }: { note: Note }) {
  const [toggle, setToggle] = useState(false);

  const EditNote = () => (
    <form method='POST'>
      <input type='text' name='text' defaultValue={note.text} />
      <input type='hidden' name='noteId' value={note.noteId} />
      <button type='submit'>Save</button>
    </form>
  );

  return (
    <div>
      <h3>Note editor</h3>
      <div>
        {note.text ? (
          <>
            {toggle ? <EditNote /> : <p>{note.text}</p>}
            {toggle ? (
              <button onClick={() => setToggle(false)}>Cancel</button>
            ) : (
              <div>
                <button onClick={() => setToggle(true)}>Edit</button>
                <form method="POST">
                  <input type='hidden' name='noteId' value={note.noteId} />
                  <input type='hidden' name='deleteMethod' value='true' />
                  <button type='submit'>Delete</button>
                </form>
              </div>
            )}
          </>
        ) : (
          <EditNote />
        )}
      </div>
    </div>
  );
}
