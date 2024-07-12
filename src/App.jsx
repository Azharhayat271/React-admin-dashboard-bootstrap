import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weclome from "./pages/dashboard/index";
import DashboardDesign from './pages/dashboard/newDashboardDesign';
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/signup";
import FormLayout from "./components/forms/form_layout";
import FormformLayoutalidation from "./components/forms/form_validations";
import NotFound from "./pages/error/page-404";
import Table from "./components/dataviews/table";
import Grid from "./components/dataviews/grid";
import Calender from './components/calender/calender';
import ViewProfile from './components/profile/view';
import Layout from './layout/layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Weclome /></Layout>} />
          <Route path="/newDashboardDesign" element={<Layout><DashboardDesign /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/formLayout" element={<Layout><FormLayout /></Layout>} />
          <Route path="/formValidations" element={<Layout><FormformLayoutalidation /></Layout>} />
          <Route path="/table" element={<Layout><Table /></Layout>} />
          <Route path="/grid" element={<Layout><Grid /></Layout>} />
          <Route path="/calender" element={<Layout><Calender /></Layout>} />
          <Route path="/viewProfile" element={<Layout><ViewProfile /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
