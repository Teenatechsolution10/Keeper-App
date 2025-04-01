import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputCard from "./components/InputCard";
import AllNotes from "./components/AllNotes";
import NoteBehaviour from "./components/NoteBehaviour";
import ZeroState from "./components/ZeroState";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("allNotes"));
    if (storedNotes) {
      setAllNotes(storedNotes);
    }
  }, []);

  // Save notes to localStorage when allNotes changes
  useEffect(() => {
    if (allNotes.length > 0) {
      localStorage.setItem("allNotes", JSON.stringify(allNotes));
    } else {
      localStorage.removeItem("allNotes"); // Remove from localStorage when empty
    }
  }, [allNotes]);
  return (
    <div>
      <Header />
      <InputCard setAllNotes={setAllNotes} />

      <div className="parentContainer">
        {!allNotes?.length == 0 && (
          <NoteBehaviour
            setSearchText={setSearchText}
            searchText={searchText}
            setAllNotes={setAllNotes}
          />
        )}

        <div className="notesContainer">
          {allNotes.length !== 0 ? (
            allNotes.filter((eachNote) =>
              eachNote?.title.toLowerCase().includes(searchText.toLowerCase())
            ).length > 0 ? (
              allNotes
                .filter((eachNote) =>
                  eachNote?.title
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
                .map((eachNote, id) => (
                  <AllNotes
                    key={id}
                    noteData={eachNote}
                    id={id}
                    setAllNotes={setAllNotes}
                    allNotes={allNotes}
                  />
                ))
            ) : (
              <p>No notes found.</p>
            )
          ) : (
            <ZeroState />
           
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
