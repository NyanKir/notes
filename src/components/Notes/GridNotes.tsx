import React, { useEffect, useRef, useState } from 'react';
import styles from './GridNotes.module.scss';
import { ReactComponent as Pen } from '../../assets/pen.svg';
import { changeTextType, NoteType } from '../../App';

interface NoteProps {
  note: NoteType;
  changeText:changeTextType

}

function Note({ note, changeText }: NoteProps): JSX.Element {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (note.new) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      textareaRef.current.focus();
    }
  }, []);
  return (
    <div className={`${styles.note} note_${note.color}`}>
      {
        note.new ? (
          <textarea
            rows={4}
            className={styles.textarea}
            ref={textareaRef}
            data-id={note.id}
            onChange={changeText}
            value={note.text}
          />
        ) : (
          <span className={styles.text}>
            {note.text}
          </span>
        )
      }

      {
        !note.new ? (
          <div className={styles.footer}>
            <span className={styles.date}>{new Date(note.date).toDateString()}</span>
            <button
              type="button"
              className="btn button_dark button_radius button_center"
              aria-label="Change"
            >
              <Pen className={styles.svg} />
            </button>
          </div>
        )
          : ''
      }
    </div>
  );
}

interface NotesProps {
  notes: Array<NoteType>;
  changeText:changeTextType
}

function GridNotes({ notes, changeText }: NotesProps): JSX.Element {
  return (
    <div className={styles.grid}>
      {
        notes.map((el) => <Note note={el} key={el.id} changeText={changeText} />)
      }
    </div>
  );
}

export default GridNotes;
