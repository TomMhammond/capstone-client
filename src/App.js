import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientPage from "./pages/ClientPage/ClientPage";
import Header from './components/Header/Header'
import SingleClientPage from "./pages/SingleClientPage/SingleClientPage";
import PetsPage from "./pages/PetsPage/PetsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/clients" element={<ClientPage />}/>
        <Route path="/clients/:id" element={<SingleClientPage />} />
        <Route path="/pets" element={<PetsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
