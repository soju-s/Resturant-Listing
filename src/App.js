import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Headers from "./Components/Headers/Headers";
import Main from "./Components/Main/Main";
import ViewResturant from "./Components/ViewResturant";

function App() {
  return (
    <>
      <Headers />
      <section>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/view-resturant/:id" element={<ViewResturant />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
