import React from "react";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import Button from "../Button";

interface ISearchProps {
  hasError?: boolean;
  onSubmit: (text: string) => void;
}

const Search: React.FC<ISearchProps> = ({ hasError, onSubmit }) => {
  const [userName, setUserName] = React.useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName.trim()) {
      onSubmit(userName);
      setUserName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search Github username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {hasError && <div className={styles.error}>No result</div>}
        {/*Create Button comp */}
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default Search;
