import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import Home from "./pages/home"
import AddNewBlog from './pages/add-blog'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-blogs" element={<AddNewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
