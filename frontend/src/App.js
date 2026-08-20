import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Presentation from "./pages/Presentation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Presentation />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-center"
        theme="light"
        toastOptions={{
          style: {
            background: "#F1E7D0",
            color: "#4A3728",
            border: "1px solid rgba(184,152,92,0.4)",
            fontFamily: "'Cormorant Garamond', serif",
          },
        }}
      />
    </div>
  );
}

export default App;
