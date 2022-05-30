import styles from "./styles.module.css";

import { useDispatch } from "react-redux";
import { filterNote } from "../../redux/notes/notesSlice";

function Search() {
  const dispatch = useDispatch();

  const handleFilterSearch = (e) => {
    dispatch(filterNote(e.target.value));
  };

  return (
    <div className={styles.search}>
      <label htmlFor="search" className={`${styles.searchLabel}`}>
        Search:
      </label>
      <input
        className={styles.searchInput}
        id="search"
        onChange={handleFilterSearch}
      />
    </div>
  );
}

export default Search;
