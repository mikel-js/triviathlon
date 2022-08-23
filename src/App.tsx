import React, { lazy, FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/index'));

type Props = {
  component: FC;
  path: any;
};

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
    <div className='App'>
      <CustomRouter />
    </div>
  );
}

export default App;
