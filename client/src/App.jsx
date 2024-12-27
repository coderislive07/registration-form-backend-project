import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Applicants from './pages/applicants';
import Regform from './pages/Regform';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Regform />} />
        <Route path="/applicants" element={<Applicants />} />
      </Routes>
    </Router>
  );
}

export default App;
