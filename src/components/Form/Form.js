import { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  const handleCheckColor = (e) => {
    setColor(e.target.id);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title === "" && description === "") {
      return;
    }
    dispatch(
      addNote({
        id: Math.round(Math.random() * 1000),
        title: title,
        description: description,
        color: color,
      })
    );
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.noteTitleGroup}>
        <label htmlFor="title" className={styles.titleLabel}>
          Title:
        </label>
        <input
          id="title"
          className={styles.titleInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.noteTextareaGroup}>
        <label htmlFor="note" className={styles.noteLabel}>
          Note:
        </label>
        <textarea
          className={styles.noteTextarea}
          name="note"
          id="note"
          rows="8"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className={styles.inputGroup}>
        <div>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            type="button"
            id="Primary"
            onClick={handleCheckColor}
          ></button>
          <button
            className={`${styles.btn} ${styles.btnPink}`}
            type="button"
            id="Pink"
            onClick={handleCheckColor}
          ></button>
          <button
            className={`${styles.btn} ${styles.btnYellow}`}
            type="button"
            id="Yellow"
            onClick={handleCheckColor}
          ></button>
          <button
            className={`${styles.btn} ${styles.btnPurple}`}
            type="button"
            id="Purple"
            onClick={handleCheckColor}
          ></button>
          <button
            className={`${styles.btn} ${styles.btnGreen}`}
            type="button"
            id="Green"
            onClick={handleCheckColor}
          ></button>
        </div>

        <div>
          <button type="submit" className={styles.saveBtn}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
