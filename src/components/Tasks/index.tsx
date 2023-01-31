import styles from './tasks.module.css';

export function Tasks() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tasks added</p>
                    <span>10</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Finished</p>
                    <span>2 - 10</span>
                </div>
            </header>
        </section>
    )
}