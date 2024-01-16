import React, { useRef } from "react";
import styles from "./SearchBox.module.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const SearchBox = (props) => {
  const { placeholder = "placeholder", isSearching = false, onChange } = props;
  const initValue = "";
  const searchRef = useRef(initValue);

  const handleClear = (event) => {
    searchRef.current.value = initValue;
    event.target = searchRef.current;
    // console.log("event", event);
    onChange(event);
  };
  return (
    <div className={styles["search-wrapper"]}>
      <div className={styles["search-container"]}>
        <input
          className={styles["search"]}
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          ref={searchRef}
        />
        <div className={styles["btn-search"]}>
          <div className={styles["search-loader"]} hidden={!isSearching}>
            <Loader type="Oval" color="#00BFFF" height={30} width={30} />
          </div>
          <button
            className={styles["search-btn"]}
            onClick={handleClear}
            hidden={searchRef.current.value === initValue || isSearching}
          >
            X <span hidden>Clear Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};
