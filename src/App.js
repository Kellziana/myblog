import Body from "./components/Body/Body";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import PostSelf from "./pages/postself/PostSelf";
import Contacts from "./pages/contacts/Contacts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <Router>
    <Body/>
    <Navigation/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Contacts' element={<Contacts/>} />
    <Route path='/Blog' element={<Blog/>} />
    <Route path='/Post' element={<PostSelf/>} />
    </Routes>
  </Router>
  );
}

export default App;
