import React, { lazy, FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/index'));

type Props = {
  component: FC;
  path: any;
};

const CustomRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

function App() {
  return (
    <div className='App'>
      <Home />
      <CustomRouter />
    </div>
  );
}

export default App;
