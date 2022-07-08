import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home from './pages/home/Home';
import  Product  from './pages/product/Product';
import  Blog  from './pages/blog/Blog';
import  Contact  from './pages/contact/Contact';
import  Demo  from './pages/demo/Demo';
import  Faq  from './pages/faq/Faq';
import  Login  from './pages/login/Login';
import  Register  from './pages/register/Register';
import Forum from './pages/forum/Forum';
import NavBar from './components/navbar/NavBar';

function AppRouting (){
    return(
        <>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Product />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/forum" element={<Forum />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/demo" element={<Demo />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
        </>
    )
};

export default AppRouting;