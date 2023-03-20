
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
import CoverProfile from "./components/profile/CoverProfile";
import ContentGallery from "./components/profile/ContentGallery";
import PersonalData from "./components/profile/PersonalData";
import {useSelector} from "react-redux";
import BeforeDash from "./components/before-dash/BeforeDash";


const UserDashboardWithAuth = withAuthorization(['user'], BeforeDash);


function App() {
    const userRole = useSelector(state => state.auth.role);

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {userRole === 'user' ? <UserHeader /> : <Header />}
                <main className="flex-1 bg-primaryGrey-90">
                    <Routes>
                        {userRole === 'user' ? <Route exact path="/" element={<UserDashboardWithAuth />} /> : <Route exact path="/" element={<Home />} />}
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route exact path="/signin" element={<SignIn />} />
                        <Route path="*" element={<NotFound />} />
                        <Route exact path="/user/dashboard/*" element={<UserDashboardWithAuth />}>
                            <Route path="profile/*" element={<CoverProfile />}>
                                <Route path="gallery/" element={<ContentGallery />} />
                                <Route path="personaldata/:userId" element={<PersonalData />} />
                            </Route>
                        </Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
