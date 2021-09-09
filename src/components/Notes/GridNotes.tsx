import React, { useState } from 'react';
import styles from './GridNotes.module.scss';
import { ReactComponent as Pen } from '../../assets/pen.svg';
import { NoteType } from '../../App';

interface NoteProps {
  note: NoteType;
}

function Note({ note }: NoteProps): JSX.Element {
  return (
    <div className={`${styles.note} note_${note.color}`}>
      <span className={styles.text}>
        {note.text}
      </span>
      <div className={styles.footer}>
        <span className={styles.date}>May 12, 2001</span>
        <button
          type="button"
          className="btn button_dark button_radius button_center"
          aria-label="Change"
        >
          <Pen className={styles.svg} />
        </button>
      </div>
    </div>
  );
}

interface NotesProps {
  notes: Array<NoteType>;
}

function GridNotes({ notes }: NotesProps): JSX.Element {
  return (
    <div className={styles.grid}>
      {
        notes.map((el) => <Note note={el} key={el.id} />)
      }
    </div>
  );
}

export default GridNotes;
