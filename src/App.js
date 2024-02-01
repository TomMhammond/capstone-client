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

function App() {
  const token = sessionStorage.authToken;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/clients" element={<ClientPage token={token}/>}/>
        <Route path="/clients/:id" element={<SingleClientPage token={token}/>} />
        <Route path="/pets" element={<PetsPage token={token}/>} />
        <Route path="/pets/:id" element={<SinglePetPage token={token}/>} />
        <Route path="/register/client" element={<CreateClientPage token={token}/>} />
        <Route path="/register/pet" element={<CreatePetPage token={token}/>} />
        <Route path="/register/medical" element={<CreateMedicalPage token={token}/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
