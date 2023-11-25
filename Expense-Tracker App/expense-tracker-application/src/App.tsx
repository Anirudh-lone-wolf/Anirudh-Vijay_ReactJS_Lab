
import React from "react";
import "./App.css";
import ShowList from "./components/ShowList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/add"
            element={<ExpenseTracker onTrue={undefined} onClose={undefined} />}
          />
          <Route path="/" element={<ShowList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

