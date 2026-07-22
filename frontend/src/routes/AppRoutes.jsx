import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Libros from "../pages/Libros";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/libros" element={<Libros />} />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
