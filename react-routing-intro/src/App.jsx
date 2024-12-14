import Navbar from './components/UI/navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
