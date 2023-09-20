import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import "./style/index.js"
import Header from './components/common/Header.js';


const App = () => {
  /* components */
  const Home = lazy(() => import("./components/home/Home"));
  

  return (
    <div>
      <header id='header'>
        <Header />
      </header>
      <main>
        <BrowserRouter>
          <Suspense fallback={<div>render...</div>}>
            <Routes>
              <Route path='/' Component={Home} />
              {/* <Route path='/login' Component={Login}} /> */}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
