import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegator from "./components/NavigatorMenu";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navegator />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
