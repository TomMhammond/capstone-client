import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientPage from "./pages/ClientPage/ClientPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<ClientPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
