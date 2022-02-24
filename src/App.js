import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookContextProvider from "./contexts/BookContext";
import Map from "./components/Map";
import Graph from "./components/graphd3";
import ParticleDemo from "./components/particle";
import TypedDemo from "./components/type";
import FunctionComponent from "./components/FunctionComponent";
import TestContextProvider from "./contexts/TestContext";

function App() {
  return (
    <div className="App">
      {/* <TestContextProvider>

          <BookContextProvider>
            <Navbar/>
            <BookList />
            <BookForm/>
            <FunctionComponent/>
          </BookContextProvider>
</TestContextProvider> */}

      <Map />

      {/* <Graph/> */}
      {/* <TypedDemo/> */}
      {/* <ParticleDemo/> */}
    </div>
  );
}

export default App;
