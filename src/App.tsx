import React, { useState } from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import GridNotes from './components/Notes/GridNotes';

export interface NoteType {
  id:number,
  color: 'primary' | 'danger' | 'warning' | 'accept' | 'purple',
  text: string
}

type createNotesType = <T>(arg: T) => void

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
      <button className={`${styles.bubble} button_primary`} onClick={() => createNotes('primary')} aria-label="Create" type="button" />
      <button className={`${styles.bubble} button_danger`} onClick={() => createNotes('danger')} aria-label="Create" type="button" />
      <button className={`${styles.bubble} button_warning`} onClick={() => createNotes('warning')} aria-label="Create" type="button" />
      <button className={`${styles.bubble} button_purple`} onClick={() => createNotes('purple')} aria-label="Create" type="button" />
      <button className={`${styles.bubble} button_accept`} onClick={() => createNotes('accept')} aria-label="Create" type="button" />
    </div>
  );
}

function App(): JSX.Element {
  const [notes, setNotes] = useState<Array<NoteType>>([{
    id: 1,
    color: 'primary',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur!',
  }]);

  const createNote:createNotesType = (color) => {
    console.log(color);
  };

  return (
    <div className={styles.app}>
      <ButtonCreate createNotes={createNote} />
      <section className={styles.section}>
        <Header />
        <GridNotes notes={notes} />
      </section>
    </div>
  );
}

export default App;
