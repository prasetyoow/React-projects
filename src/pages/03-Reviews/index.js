import React from "react";
import Review from "./Review";

function App() {
  return (
    <main className="main__reviews">
      <section className="container__reviews">
        <div className="title__reviews">
          <h2>our reviews</h2>
          <div className="underline__reviews"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
