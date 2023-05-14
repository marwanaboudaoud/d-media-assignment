import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage"

export const MyRouts = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" />
                <Route path="/about" />
                <Route path="/todos"/>
            </Routes>
        </Router>
    )
}