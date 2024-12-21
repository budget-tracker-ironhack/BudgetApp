import Navbar from './components/ui/navbar';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homepage';
import TransactionsPage from './pages/transactionsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/transactionsPage" element={<TransactionsPage />} />
      </Routes>
    </>
  );
}

export default App;
