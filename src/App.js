import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/00-Home";
import BirthdayReminder from "./pages/01-Birthday Reminder";
import Tours from "./pages/02-Tours";
import Reviews from "./pages/03-Reviews";
import Accordion from "./pages/04-Accordion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<BirthdayReminder />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </>
  );
}

export default App;
