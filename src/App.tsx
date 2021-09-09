import React, {useState} from 'react';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <ButtonCreate/>
            <section className={styles.section}>
                <h1>Notes</h1>
            </section>
        </div>
    );
}

function ButtonCreate() {
    const [hidden, setHidden] = useState(false)

    return (
        <div className={`${styles.wrapper} ${hidden ? styles.active : ""}`}>
            <button className={`${styles.btn} button_dark button_plus`} onClick={() => setHidden(s => !s)}/>
            <div className={`${styles.bubble} button_primary`}/>
            <div className={`${styles.bubble} button_danger`}/>
            <div className={`${styles.bubble} button_warning`}/>
            <div className={`${styles.bubble} button_purple`}/>
            <div className={`${styles.bubble} button_accept`}/>
        </div>
    )
}

export default App;
