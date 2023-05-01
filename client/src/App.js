
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
import {useDispatch, useSelector} from "react-redux";
import BeforeDash from "./components/before-dash/BeforeDash";
import OwnerDashboard from "./views/user/OwnerDashboard";
import OwnerRooms from "./components/owner-middle-content/OwnerRooms";



const UserDashboardWithAuth = withAuthorization(['user'], BeforeDash);

function App() {
    const userRole = useSelector(state => state.auth.role);
    const userId = useSelector(state => state.auth.userId);

    return (
        <Router>
            <div className="flex min-h-screen flex-col">
                {userRole !== 'user' ? <Header /> : <UserHeader />}
                 <main className="flex-1 bg-primaryGrey-90">
                    <Routes>
                        {userRole === 'user' ? <Route exact path="/" element={<UserDashboardWithAuth />} /> : <Route exact path="/" element={<Home />} />}
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route exact path="/signin" element={<SignIn />} />
                        <Route path="*" element={<NotFound />} />
                        <Route exact path="/user/roles" element={<UserDashboardWithAuth />}/>
                        <Route exact path="/user/owner/*" element={<OwnerDashboard/>}/>
                        <Route exact path="/:userId/*" element={<OwnerRooms userId={userId} />}/>
                         <Route exact path="/user/dashboard/*" element={<UserDashboard />}>
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
