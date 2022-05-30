import React from "react";
import "./style.css";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeNote } from "../../redux/notes/notesSlice";

function Notes() {
  const items = useSelector((state) => state.notes.items);
  const search = useSelector((state) => state.notes.filtered);

  const dispatch = useDispatch();

  let filteredItem = search
    ? items.filter((item) => item.title.includes(search))
    : items;

  return (
    <div>
      {filteredItem && (
        <div className={styles.title}>
          <h3>Notes:</h3>
        </div>
      )}
      <div className={styles.cardContent}>
        {filteredItem &&
          filteredItem.map((item) => (
            <div key={item.id} className={`${styles.card} ${item.color}`}>
              <div className={styles.cardHeader}>
                <div className={styles.headerTitle}>{item.title}</div>
                <div className={styles.closeBtn}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                    onClick={() => dispatch(removeNote(item.id))}
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.cardBody}>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Notes;
