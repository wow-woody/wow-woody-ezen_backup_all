import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Man from './pages/Man';
import Women from './pages/Women';
import Jewelery from './pages/Jewelery';
import Electronics from './pages/Electronics';
import NotFound from './pages/NotFound';
import Login  from './pages/Login';
import Join from './pages/Join';
import Cart from './pages/Cart';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/man" element={<Man /> } />
        <Route path="/women" element={<Women /> } />
        <Route path="/jewelery" element={<Jewelery /> } />
        <Route path="/electronics" element={<Electronics /> } />
        <Route path="*" element={<NotFound />}/>

        <Route path="/userinfo" element={<UserInfo />}/>
        

        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>

    </div>
  );
}

export default App;
