// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from './pages/Main';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Header from './pages/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioWeb from './pages/PortfolioWeb';
import PortfolioReact from './pages/PortfolioReact';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './scss/header.scss'
import Footer from './pages/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <nav>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
    </nav> */}

      <Routes>
        <Route path='' element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="portfolio" element={<Portfolio />}>
          <Route path="portfolioWeb" element={<PortfolioWeb />} />
          <Route path="PortfolioReact" element={<PortfolioReact />} />
        </Route>
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path='product/:id' element={<ProductDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
