// Routes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import UserCrud from './components/user/UserCrud';


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}