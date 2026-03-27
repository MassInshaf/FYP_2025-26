import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./page/Landingpage";
import ImageUploader from "./page/ImageUploader";
import Result from "./page/Result";
import Instructions from "./page/Instructions";
import About from "./page/About";

function App() {
    return (
        <div class="">
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/imageuploader" element={<ImageUploader />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/instructions" element={<Instructions/>}/>
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
