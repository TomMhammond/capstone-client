import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientPage from "./pages/ClientPage/ClientPage";
import Header from './components/Header/Header'
import SingleClientPage from "./pages/SingleClientPage/SingleClientPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/clients" element={<ClientPage />}/>
        <Route path="/clients/:id" element={<SingleClientPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
