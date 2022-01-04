import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Contact() {
  return <h2>Contact</h2>
}


function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}> /</Route>
        <Route path="/contact" element={<Contact />}> /</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
