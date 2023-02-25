import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SignUp from "./components/authentication/SignUp";
import Footer from "./components/footer/Footer";
import SignIn from "./components/authentication/Signin";
import UserDashboard from "./views/user/UserDashboard";
import withAuthorization from './components/authentication/withAuthorization';
import NotFound from "./components/404/NotFound";
import UserHeader from "./components/user-nav/UserHeader";

const UserDashboardWithAuth = withAuthorization(['user'], UserDashboard);

const AuthHeader = () => (
    <UserHeader />
);

function App() {
    const userRole = localStorage.getItem('role');

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {userRole === 'user' ? <AuthHeader /> : <Header />}
                <main className="flex-1">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route exact path="/signin" element={<SignIn />} />
                        <Route path="*" element={<NotFound />} />
                        <Route exact path="/user/dashboard" element={<UserDashboardWithAuth />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
