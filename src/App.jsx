import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicsPage from "./pages/BasicsPage";
import HooksPage from "./pages/HooksPage";
import AdvancedPage from "./pages/AdvancedPage";
import Navbar from "./components/Navbar";
import ApiPage from "./pages/Apipage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-4">
            <Routes>
              <Route path="/" element={<BasicsPage />} />
              <Route path="/hooks" element={<HooksPage />} />
              <Route path="/advanced" element={<AdvancedPage />} />
              <Route path="/api" element={<ApiPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
