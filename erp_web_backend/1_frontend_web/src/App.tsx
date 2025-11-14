import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard/Dashboard';
import AppLayout from './components/Layout/AppLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;





