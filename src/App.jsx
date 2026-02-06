import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import ProtectedRoute from './ProtectedRoute';
import useAuth from './hooks/useAuth'

function App() {
const { isAuthenticated } = useAuth()

  return (
    <Router>
      <Header isLoggedIn={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
         <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
