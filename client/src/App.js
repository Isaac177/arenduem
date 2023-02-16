
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    </Router>
  );
}

export default App;
