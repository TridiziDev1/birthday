import logo from './logo.svg';
import './App.css';
import BirthdaySection from './componets/Birthday Section/BirthdaySection';
import CountdownSection from './componets/Countdown section/CountdownSection';
import MessageSection from './componets/Message Section/MessageSection';
import LastWishesSection from './componets/Last Wishes Section/LastWishesSection';
import Box from './componets/Box/Box';
import Navbar from './componets/NavBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';

function App() {
  return (
    <>
      <CountdownSection />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CountdownSection/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;








