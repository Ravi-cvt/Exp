import { Routes, Route, Link } from 'react-router-dom';
import Exp3_1 from './Exp3_1';
import Exp3_2 from './Exp3_2';
import Exp3_3 from './Exp3_3';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>React Lab Experiments</h1>
      <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/exp1" style={{ margin: '0 10px' }}>Experiment 1</Link> |
        <Link to="/exp2" style={{ margin: '0 10px' }}>Experiment 2</Link> |
        <Link to="/exp3" style={{ margin: '0 10px' }}>Experiment 3</Link>
      </nav>
      <Routes>
        <Route path="/exp1" element={<Exp3_1 />} />
        <Route path="/exp2" element={<Exp3_2 />} />
        <Route path="/exp3" element={<Exp3_3 />} />
        <Route path="/" element={<div style={{ textAlign: 'center' }}>Welcome! Choose an experiment from the navigation above.</div>} />
      </Routes>
    </div>
  );
}

export default App;
