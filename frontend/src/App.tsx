import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Register from './pages/Register';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><p>homepage</p></Layout>} />
      <Route path="/sign-in" element={<Layout><p>homepage</p></Layout>} />
      <Route path="/register" element={<Layout><Register/></Layout>} />
    </Routes>
  );
}

export default App;
