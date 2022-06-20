import React from 'react';
import {Routes, Route} from 'react-router-dom';

import MainPage, {routeMain as routeMainPage} from 'pages/MainPage';
import VocabularyPage, {routeMain as routeVocabularyPage} from 'pages/VocabularyPage';
import AddWordPage, {routeMain as routeAddWordPage} from 'pages/AddWordPage';

import './styles.scss';

const AppContent = () => (
  <div className="mainWrapper">
    <main>
      <Routes>
        <Route path={routeMainPage()} element={<MainPage />} />
        <Route path={routeVocabularyPage()} element={<VocabularyPage />} />
        <Route path={routeAddWordPage()} element={<AddWordPage />} />
      </Routes>
    </main>
  </div>
);

export default AppContent;
