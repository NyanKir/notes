import React, { useState } from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import GridNotes from './components/Notes/GridNotes';

type Colours = 'primary' | 'danger' | 'warning' | 'accept' | 'purple'

export interface NoteType {
  id: number,
  color: Colours,
  text: string,
  date: number,
  description?: string,
  new?: boolean
}

type createNotesType = (arg: Colours) => void
export type changeTextType=(e:any)=>void

interface ButtonProps {
  createNotes: createNotesType,
}

function ButtonCreate({ createNotes }: ButtonProps): JSX.Element {
  const [hidden, setHidden] = useState(false);

  return (
    <div className={`${styles.wrapper} ${hidden ? styles.active : ''}`}>
      <button
        type="button"
        aria-label="Plus"
        className="btn button_dark button_plus button_radius"
        onClick={() => setHidden((s) => !s)}
      />
      <button
        className={`${styles.bubble} button_primary`}
        onClick={() => createNotes('primary')}
        aria-label="Create"
        type="button"
      />
      <button
        className={`${styles.bubble} button_danger`}
        onClick={() => createNotes('danger')}
        aria-label="Create"
        type="button"
      />
      <button
        className={`${styles.bubble} button_warning`}
        onClick={() => createNotes('warning')}
        aria-label="Create"
        type="button"
      />
      <button
        className={`${styles.bubble} button_purple`}
        onClick={() => createNotes('purple')}
        aria-label="Create"
        type="button"
      />
      <button
        className={`${styles.bubble} button_accept`}
        onClick={() => createNotes('accept')}
        aria-label="Create"
        type="button"
      />
    </div>
  );
}

function App(): JSX.Element {
  const [notes, setNotes] = useState<Array<NoteType>>([{
    id: 1,
    color: 'primary',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur!',
    date: Date.now() - (100 * 1000000),
  }, {
    id: 2,
    color: 'purple',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur!',
    date: Date.now(),
  }]);

  const createNote: createNotesType = (color) => {
    const newNote: NoteType = {
      id: notes[notes.length - 1].id + 1,
      color,
      text: 'New Note!',
      date: Date.now(),
      new: true,
    };
    const newArr = [...notes].reverse();
    newArr.unshift(newNote);
    setNotes(newArr.reverse());
  };

  const changeText:changeTextType = (e) => {
    setNotes((s) => s.map((note) => {
      if (note.id === +e.target.dataset.id) {
        const copyNote = { ...note };
        copyNote.text = e.target.value;
        return copyNote;
      }
      return note;
    }));
  };

  return (
    <div className={styles.app}>
      <ButtonCreate createNotes={createNote} />
      <section className={styles.section}>
        <Header />
        <GridNotes notes={notes} changeText={changeText} />
      </section>
    </div>
  );
}

export default App;
