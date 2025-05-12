import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import useUserRoutes from './components/routes/userRoutes';
function App() {
  const userRoutes = useUserRoutes();
  return (
    <Router>
      <Header/>
      <Routes>
        {userRoutes}
      </Routes>
      <Footer/>
    </Router> 
  );
}
export default App;