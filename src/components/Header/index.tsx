import todoLogo from "../../assets/todoLogo.svg";
import { AiOutlinePlusCircle } from 'react-icons/ai';

import styles from "./header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form className={styles.newTaskForm} >
                <input placeholder="Add a new task"/>
                <button>
                    Add
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}