import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './utils/ProtecteRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Users from './pages/Users';
import Header from './pages/Header';
import Sections from './pages/Sections';
import Deliveries from './pages/Deliveries';
import YourOrders from './pages/YourOrders';
import YourClients from './pages/YourClients';
import DataClient from './pages/DataClient';
import Products from './pages/Products';
import Configuration from './pages/Configuration';

function App() {
  return (
    <div className="app_container">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/log-in" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<YourOrders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/secciones" element={<Sections />} />
          <Route path="/seccion/:id" element={<Products />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/your-clients" element={<YourClients />} />
          <Route path="/data-client/:id" element={<DataClient />} />
          <Route path="/configuration" element={<Configuration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
