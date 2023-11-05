import type { notes as Note } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export default function AllNotes({
  notes,
  baseNoteUrl,
}: {
  notes: Note[];
  baseNoteUrl: string;
}) {
  return (
    <div>
      <h3>All Notes</h3>
      <a href={`${baseNoteUrl}/${uuidv4()}`}>new</a>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <a href={`${baseNoteUrl}/${note.noteId}`}>
              <p>{note.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
