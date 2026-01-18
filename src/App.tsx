import { Routes, Route } from "react-router-dom";
import BlogPage from "./pages/Blog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogPage/>}/>
    </Routes>
  );
}
