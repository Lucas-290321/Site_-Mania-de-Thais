import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import ServicosPage from './pages/ServicosPage.jsx';
import ContentPage from './pages/ConteudosPage.jsx';
import DepoimentosPage from './pages/DepoimentosPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/conteudos" element={<ContentPage />} />
            <Route path="/depoimentos" element={<DepoimentosPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={
              <div className="min-h-screen cosmic-bg flex items-center justify-center text-center px-4">
                <div>
                  <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                  <p className="text-xl text-white mb-8">Página não encontrada no universo.</p>
                  <a href="/" className="px-6 py-3 bg-accent text-white rounded-lg font-bold">Voltar ao Início</a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster theme="dark" position="bottom-right" />
    </Router>
  );
}

export default App;