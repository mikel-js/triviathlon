import React, { lazy, FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/index'));

type Props = {
  component: FC;
  path: any;
};

const CustomRoute: FC<Props> = ({ component: Component, path }) => {
  return (
    <Route
      path={path}
      element={(props: any): any => <Component {...props} />}
    />
  );
};

const CustomRouter = () => {
  return (
    <Routes>
      <CustomRoute path={'/'} component={Home} />
    </Routes>
  );
};

function App() {
  return <div className='App'>Boiler Plate</div>;
}

export default App;
