import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error404Page from "./pages/Error404Page";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Navigation/>

            <Routes>
                <Route path="/" element={<Home/>}/>

                {/* Error Page (has to be last) */}
                <Route path="*" element={<Error404Page/>}/>
            </Routes>

            <Footer/>
        </Router>
    )
}

export default App;
