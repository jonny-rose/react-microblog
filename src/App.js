import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Header from "./Components/Header";
import FeedPage from "./pages/FeedPage";
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import ApiProvider from "./contexts/ApiProvider";
import RegistrationPage from "./pages/RegistrationPage";
import FlashProvider from './contexts/FlashProvider';

export default function App() {

  return (
    <Container fluid className="App">
      <BrowserRouter>
        <FlashProvider>
          <ApiProvider>
            <Header />
            <Routes>
              <Route path="/" element={<FeedPage/>}/>
              <Route path="/explore" element={<ExplorePage/>}/>
              <Route path="/user/:username" element={<UserPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path='/register' element={<RegistrationPage />}/>
              <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
          </ApiProvider>
        </FlashProvider>
      </BrowserRouter>
    </Container>
  );
}