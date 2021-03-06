import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Contact() {
  return <h2>Contact</h2>
}

function NotFound() {
  return <h2>Not Found Page</h2>
}

function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
        <li>
        <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
