import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import Order from "./pages/Order";
import OrderFinished from "./pages/OrderFinished";
import Error404Page from "./pages/Error404Page";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Navigation/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/download" element={<Download/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/orderfinished" element={<OrderFinished/>}/>

                {/* Error Page (has to be last) */}
                <Route path="*" element={<Error404Page/>}/>
            </Routes>

            <Footer/>
        </Router>
    )
}

export default App;
