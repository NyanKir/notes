import React from 'react';
import styles from './App.module.css';

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
    return (
        <div className={styles.wrapper}>
            <button className="btn button_dark button_plus"></button>
                <div className={`${styles.bubble} button_primary`}/>
                <div className={`${styles.bubble} button_danger`}/>
                <div className={`${styles.bubble} button_warning`}/>
                <div className={`${styles.bubble} button_purple`}/>
                <div className={`${styles.bubble} button_accept`}/>
        </div>
    )
}

export default App;
