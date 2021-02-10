import { lazy, Suspense } from 'react';

import './styles/global.css';
import './styles/app.css';

import Loading from './components/Loading';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Card = lazy(() => import('./components/Card'));

function App() {
  return (
    <div className='container'>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>

      <main className='content'>
        <Suspense fallback={<Loading />}>
          <Card />
        </Suspense>
      </main>

      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
