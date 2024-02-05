import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ClientPage from "./pages/ClientPage/ClientPage";
import Header from './components/Header/Header'
import SingleClientPage from "./pages/SingleClientPage/SingleClientPage";
import PetsPage from "./pages/PetsPage/PetsPage";
import SinglePetPage from "./pages/SinglePetPage/SinglePetPage";
import CreateClientPage from "./pages/CreateClientPage/CreateClientPage";
import CreatePetPage from "./pages/CreatePetPage/CreatePetPage";
import CreateMedicalPage from "./pages/CreateMedicalPage/CreateMedicalPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import EditClientPage from "./pages/EditClientPage/EditClientPage";
import EditPetPage from "./pages/EditPetPage/EditPetPage";
import EditMedicalPage from "./pages/EditMedicalPage/EditMedicalPage";
import AddPetPage from './pages/AddPetPage/AddPetPage';
import AddMedicalPage from "./pages/AddMedicalPage/AddMedicalPage";

function App() {
  const token = sessionStorage.authToken;
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ userName, setUserName ] = useState(null);
  const [ access, setAccess] = useState(null);

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} userName={userName} setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} setAccess={setAccess}/>
      <Routes>
        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} setAccess={setAccess}/>} />
        <Route path="/dashboard" element={<DashboardPage access={access} userName={userName}/>} />
        <Route path="/clients" element={<ClientPage token={token} access={access}/>}/>
        <Route path="/clients/:id" element={<SingleClientPage token={token} access={access}/>} />
        <Route path="/pets" element={<PetsPage token={token} access={access}/>} />
        <Route path="/pets/:id" element={<SinglePetPage token={token} access={access}/>} />
        <Route path="/register/client" element={<CreateClientPage token={token} access={access}/>} />
        <Route path="/register/pet" element={<CreatePetPage token={token} access={access}/>} />
        <Route path="/register/medical" element={<CreateMedicalPage token={token} access={access}/>} />
        <Route path="/edit/client/:id" element={<EditClientPage access={access} token={token}/>} />
        <Route path="/edit/pet/:id" element={<EditPetPage access={access} token={token}/>} />
        <Route path="/edit/medical/:id" element={<EditMedicalPage access={access} token={token} />} />
        <Route path="/add/pet/:id" element={<AddPetPage access={access} token={token}/>} />
        <Route path="/add/medical/:id" element={<AddMedicalPage access={access} token={token}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
