import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import './index.css';

export default function app() {
  return (
    <>
      <NavigationBar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Dashboard />} />
          <Route
            path="/search"
            element={
              <div>
                <h1>Search</h1>
              </div>
            }
          />
          <Route path="/activity" element={<h1>activity</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
      </div>
    </>
  );
}
