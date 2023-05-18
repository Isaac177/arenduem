
import './App.css';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
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
import OwnerDashboard from "./views/user/OwnerDashboard";
import PropertyDetails from "./components/dash-content/PropertyDetails";
import UpdatePopupForm from "./components/update-form/UpdatePopupForm";
import PropertyDash from "./components/OwnerProperties/PropertyDash";
import PropertyCover from "./components/OwnerProperties/PropertyCover";
import ProContentGallery from "./components/OwnerProperties/ProContentGallery";
import ProPersonalData from "./components/OwnerProperties/ProPersonalData";



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
                        <Route exact path="/user/roles" element={<UserDashboardWithAuth />}/>
                        <Route exact path="/user/owner/*" element={<OwnerDashboard/>}/>
                        <Route path="/:userId/properties/*" element={<PropertyDash userId={userId}/>}>
                            <Route path='profile/*' element={<PropertyCover />}>
                                <Route path='gallery' element={<ProContentGallery />} />
                                <Route path='personaldata/:userId' element={<ProPersonalData />} />
                            </Route>
                        </Route>
                        <Route path="/owner/property/:propertyId/update" element={<UpdatePopupForm />} />
                        <Route exact path="/user/dashboard/*" element={<UserDashboard />}>
                            <Route path="profile/*" element={<CoverProfile />}>
                                <Route path="gallery/" element={<ContentGallery />} />
                                <Route path="personaldata/:userId" element={<PersonalData />} />
                            </Route>
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
