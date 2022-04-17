import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home/Home";
import AboutMe from "./Components/Pages/AboutMe/AboutMe";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Articles from "./Components/Pages/Home/Articles/Articles";
import SignUp from "./Components/Pages/Shared/Signup/Signup";
import Login from "./Components/Pages/Shared/Login/Login";
// import Required from "./Components/Pages/Shared/Requied/Requied";
import Required from "./Components/Pages/Shared/Required/Required";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/home/:serviceId/:name/:description"
          element={
            <Required>
              <Articles></Articles>
            </Required>
          }
        ></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
