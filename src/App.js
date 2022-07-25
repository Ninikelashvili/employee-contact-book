import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ContactList from "./pages/ContactList";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";
import Header from "./components/Header";
import styled from "styled-components";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ContactContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ContactList />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </ContactContainer>
    </BrowserRouter>
  );
};

const ContactContainer = styled.div`
  padding-top: 100px;
  max-width: 1336px;
  width: 100%;
  margin: 0 auto;
`;
export default App;
