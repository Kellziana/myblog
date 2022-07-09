import Body from "./components/Body/Body";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import PostSelf from "./pages/postself/PostSelf";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <Router>
    <Body/>
    <Navigation/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Blog' element={<Blog/>} />
    <Route path='/Post' element={<PostSelf/>} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
