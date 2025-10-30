// import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Todolist from './pages/Todolist';
import Contact from './pages/Contact';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Email from './pages/Email';
import Phone from './pages/Phone';
import Login from './pages/Login';
import Member from './pages/Member';

// import Header from './components/Header'; 안쓰는 콤포넌트 링크는 전부 삭제필요

function App() {
  return (
    <>
      <Routes>
        {/* path와 element 역할지정 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='About' element={<About />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='Portfolio/project1' element={<Project1 />} />
          <Route path='Portfolio/project2' element={<Project2 />} />
          <Route path='Skills' element={<Skills />} />
          <Route path='Todolist' element={<Todolist />} />
          <Route path='Contact' element={<Contact />}>
            <Route path='Email' element={<Email />} />
            <Route path='Phone' element={<Phone />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='join' element={<Member />} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
