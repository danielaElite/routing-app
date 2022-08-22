
import React from 'react';
import './index.css';
import{Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupsPage from './Pages/NewMeetups';
import FavoritesPage from './Pages/Favorites';
//import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    // <Layout>
    <Router>
      {/* <MainNavigation /> */}
      <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/new-meetups" element={<NewMeetupsPage />} />
    </Routes>
    </Router>
 // </Layout>

  );
}

export default App;