import React, { useState, useEffect, useRef } from "react";
import { loadProgressBar } from "axios-progress-bar";

import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

import { CardList } from "./components/CardList/CardList.component";
import { SearchBox } from "./components/SearchBox/SearchBox.component";
import { myAPI01, myAPI02, myAPIparams } from "./utils/endpoint";
import useApi from "./hooks/useApi";
import { useDebounce } from "react-use";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [openSnackBar, setOpenSnackbar] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");

  // const { response, error, isLoading } = useApi(myAPI02, myAPIparams);
  const { response, error, isLoading } = useApi(myAPI01);

  useEffect(() => {
    // console.log({ response, error, isLoading });
    setMonsters(response);
    setOpenSnackbar(true);
    setSnackBarMsg("Loaded");
  }, [response]);

  const [, cancel] = useDebounce(
    () => {
      setIsSearching(false);
      setDebouncedValue(searchField);
    },
    1500,
    [searchField]
  );
  const handleSearch = ({ currentTarget }) => {
    setIsSearching(true);
    setSearchField(currentTarget.value);
    setOpenSnackbar(true);
    setSnackBarMsg("Searching");
  };
  const filteredMonsters = monsters?.filter((monster) =>
    monster.name.toLowerCase().includes(debouncedValue.toLocaleLowerCase())
  );

  if (isLoading) {
    loadProgressBar();
    return <div>...loading </div>;
  }

  const placeholder =
    isSearching || `Search ${filteredMonsters?.length} Monsters...`;

  return (
    <div className="App ">
      {loadProgressBar()}
      {isLoading && <div>...loading </div>}
      <nav className="navbar navbar-dark fixed-top2 bg-dark">
        <h5 className="mx-auto lead text-light">
          Monsterss INC 07 (hooks & search debounce, ref)
        </h5>
      </nav>
      <div className="container2 mt-3">
        {error && (
          <>
            <h1>Error</h1>
            <p>{error}</p>
          </>
        )}

        <SearchBox
          placeholder={placeholder}
          isSearching={isSearching}
          onChange={handleSearch}
        />

        {/* <Button
          variant="primary"
          onClick={() => {
            setOpenSnackbar(true);
            setSnackBarMsg("cool");
          }}
        >
          Open success snackbar
        </Button> */}

        <button
          className="btn"
          onClick={() => {
            setOpenSnackbar(true);
            setSnackBarMsg("cool");
          }}
        >
          open snackbar
        </button>

        <div className="search-debug loading" hidden>
          Is Searching: {isSearching ? <span>TRUE</span> : <span>FALSE</span>}
          <div>
            {" "}
            <button onClick={cancel}>Cancel </button>
          </div>
        </div>
        {filteredMonsters?.length === 0 ? (
          <div
            style={{
              backgroundColor: "#EBB400",
              color: "#fff",
              padding: "20px"
            }}
          >
            NO RESULTS!!
          </div>
        ) : (
          <CardList monsters={filteredMonsters} />
        )}
      </div>
      <Snackbar
        open={openSnackBar}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={1000}
        message={snackBarMsg}
      >
        <Alert severity="success">{snackBarMsg}</Alert>
      </Snackbar>
    </div>
  );
};

export default App;
