import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/00-Home";
import BirthdayReminder from "./pages/01-Birthday Reminder";
import Tours from "./pages/02-Tours";
import Reviews from "./pages/03-Reviews";
import Accordion from "./pages/04-Accordion";
import Menu from "./pages/05-Menu";
import Tabs from "./pages/06-Tabs";
import Slider from "./pages/07-Slider";
import LoremIpsum from "./pages/08-Lorem-Ipsum";
import ColorGenerator from "./pages/09-Color-Generator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<BirthdayReminder />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/loremipsum" element={<LoremIpsum />} />
        <Route path="/colorgenerator" element={<ColorGenerator />} />
      </Routes>
    </>
  );
}

export default App;
