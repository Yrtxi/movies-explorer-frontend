import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import NavSide from '../NavSide/NavSide';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [navSideOpen, setNavsideOpen] = React.useState(false);

  const handleOpenNavSide = () => {
    setNavsideOpen(true);
  };

  const handleCloseNavSide = () => {
    setNavsideOpen(false);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path={'*'}
          element={
            <>
              <Header openMenu={handleOpenNavSide} />
              <Content />
              <Footer />
            </>
          }
        ></Route>

        <Route path="/signup" element={<Register />}></Route>

        <Route path="/signin" element={<Login />}></Route>

        <Route
          path="/profile/*"
          element={
            <>
              <Header openMenu={handleOpenNavSide} />
              <Profile />
            </>
          }
        ></Route>

        <Route path="/404" element={<PageNotFound/>}></Route>
      
      </Routes>

      <NavSide isOpen={navSideOpen} closeMenu={handleCloseNavSide} />
    </div>
  );
};

export default App;
