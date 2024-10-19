
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CourseDetailPage from './pages/CourseDetailPage';
import DashboardPage from './pages/DashboardPage';
import LessonPlayerPage from './pages/LessonPlayerPage';
import { ToastContainer } from 'react-toastify';
import './style/app.css'; 
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'



function App() {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/course/:courseId/lesson" element={<LessonPlayerPage />} />
         
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
