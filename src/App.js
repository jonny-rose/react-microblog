import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Header from "./Components/Header";
import FeedPage from "./pages/FeedPage";
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import EditUserPage from './pages/EditUserPage';
import RegistrationPage from "./pages/RegistrationPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ApiProvider from "./contexts/ApiProvider";
import FlashProvider from './contexts/FlashProvider';
import UserProvider from './contexts/UserProvider';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import ResetRequestPage from './pages/ResetRequestPage';
import ResetPage from './pages/ResetPage';

export default function App() {

  return (
    <Container fluid className="App">
      <BrowserRouter>
        <FlashProvider>
          <ApiProvider>
            <UserProvider>
              <Header />
              <Routes>
                <Route path="/login" element={<PublicRoute><LoginPage/></PublicRoute>}/>
                <Route path='/register' element={<PublicRoute><RegistrationPage /></PublicRoute>}/>
                <Route path='reset-request' element={<PublicRoute><ResetRequestPage /></PublicRoute>} />
                <Route path='/reset' element={<PublicRoute><ResetPage /></PublicRoute>} />
                <Route path="*" element={
                  <PrivateRoute>
                    <Routes>
                      <Route path="/" element={<FeedPage/>}/>
                      <Route path="/explore" element={<ExplorePage/>}/>
                      <Route path="/user/:username" element={<UserPage/>}/>

                      <Route path="/edit" element={<EditUserPage />}/>
                      <Route path='/password' element={<ChangePasswordPage />}/>
                      <Route path="*" element={<Navigate to="/" />}/>
                    </Routes>
                  </PrivateRoute>
                } />
              </Routes>
            </UserProvider>
          </ApiProvider>
        </FlashProvider>
      </BrowserRouter>
    </Container>
  );
}