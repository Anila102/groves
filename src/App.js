import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import SubHeader from './common/SubHeader';

const HomePage = React.lazy(() => import('./pages/homePage/HomePage'));

function App() {
  return (
    <div className="bg-image">
      <Router>
        <div className='background'>
          <Header />
          <SubHeader />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
