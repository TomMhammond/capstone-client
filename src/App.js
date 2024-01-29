import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientPage from "./pages/ClientPage/ClientPage";
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/clients" element={<ClientPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
