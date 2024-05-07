import css from "./SearchBox.module.css";

const SearchBox = ({ query, onSearch }) => {
  return (
    <div className={css.searcher}>
      <h2>Search contact</h2>
      <input value={query} onChange={(e) => onSearch(e.target.value)} />
    </div>
  );
};

export default SearchBox;
