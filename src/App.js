import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/00-Home";
import BirthdayReminder from "./pages/01-Birthday Reminder";
import Tours from "./pages/02-Tours";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<BirthdayReminder />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </>
  );
}

export default App;
