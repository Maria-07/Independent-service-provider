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
import Requied from "./Components/Pages/Shared/Requied/Requied";

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
            <Requied>
              <Articles></Articles>
            </Requied>
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
