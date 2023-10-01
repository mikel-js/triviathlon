import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

const Home = lazy(() => import('./pages/Home/index'));

const CustomRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CustomRouter />
    </ThemeProvider>
  );
}

export default App;
