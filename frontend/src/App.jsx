import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SubjectDetail from './pages/SubjectDetail'; 
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import PaperDetail from './pages/PaperDetail';
import TopicView from './pages/TopicView';  

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subject/:id" element={<SubjectDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/subject/:subjectId/paper/:paperYear" element={<PaperDetail />} />
          <Route path="/subject/:subjectId/topic/:topicName" element={<TopicView />} /> {/* New Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
