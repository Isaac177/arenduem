
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SignUp from "./components/authentication/SignUp";
import Footer from "./components/footer/Footer";
import SignIn from "./components/authentication/Signin";

function App() {
  return (
    <Router>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/signup" element={<SignUp />} />
                    <Route exact path="/signin" element={<SignIn />} />
                </Routes>
            </main>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
