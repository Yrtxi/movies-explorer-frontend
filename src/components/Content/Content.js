import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import { Routes, Route, Navigate } from 'react-router-dom';

const Content = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route path="/movies/*" element={<Movies />}></Route>

        <Route path="/saved-movies/*" element={<SavedMovies />}></Route>

        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </main>
  );
};

export default Content;
