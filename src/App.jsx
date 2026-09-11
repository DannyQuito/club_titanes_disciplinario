import './App.css'
import Logo_club from './Logo_club.jsx'
import {Info_one} from './Club_information.jsx'
import Social_media from './Contacts.jsx'
import { Routes, Route, Link } from 'react-router-dom';
import PageMovie from './PageMovie.jsx'

function Home() {
  return (
    <div className="box_index">
      <main className="main_one">
        <Logo_club/>
        <h1>CLUB TITANES<br/>MULTIDISCIPLINARIO</h1>
      </main>
      <div>
        <Info_one/>
      </div>
      <footer>
        <Social_media/>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Ruta para la página de inicio normal */}
      <Route path="/" element={<Home />} />
      
      {/* Ruta para tu nueva página limpia */}
      <Route path="/horarios" element={<PageMovie />} />
    </Routes>
  )
}

export default App
