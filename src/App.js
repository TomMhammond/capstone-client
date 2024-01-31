import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientPage from "./pages/ClientPage/ClientPage";
import Header from './components/Header/Header'
import SingleClientPage from "./pages/SingleClientPage/SingleClientPage";
import PetsPage from "./pages/PetsPage/PetsPage";
import SinglePetPage from "./pages/SinglePetPage/SinglePetPage";
import CreateClientPage from "./pages/CreateClientPage/CreateClientPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/clients" element={<ClientPage />}/>
        <Route path="/clients/:id" element={<SingleClientPage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/pets/:id" element={<SinglePetPage />} />
        <Route path="/register/client" element={<CreateClientPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
