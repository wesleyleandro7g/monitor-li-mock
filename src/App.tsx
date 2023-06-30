import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { LojaIntegradaLocal } from './pages/LojaIntegradaLocal'
import { LojaIntegradaStaging } from './pages/LojaIntegradaStaging';
import { LojaIntegradaHomolog } from './pages/LojaIntegradaHomolog';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/loja-integrada/local' Component={LojaIntegradaLocal} />
        <Route path='/loja-integrada/staging' Component={LojaIntegradaStaging} />
        <Route path='/loja-integrada/homolog' Component={LojaIntegradaHomolog} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
