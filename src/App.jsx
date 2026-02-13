import { Routes, Route, Link } from 'react-router-dom';
// Renaming imports to remove underscores (PascalCase)
import Exp31 from './Exp31';
import Exp32 from './Exp32';
import Exp33 from './Exp33';

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
        {/* Updated component names here to match imports */}
        <Route path="/exp1" element={<Exp31 />} />
        <Route path="/exp2" element={<Exp32 />} />
        <Route path="/exp3" element={<Exp33 />} />
        <Route path="/" element={<div style={{ textAlign: 'center' }}>Welcome! Choose an experiment from the navigation above.</div>} />
      </Routes>
    </div>
  );
}

export default App;