import '../styles/styles.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { wordPressFetch } from '../api/api';
import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

import SplashPage from '../pages/PageSplash';
import PageWebDev from '../pages/PageWebDev';
import PageWebProject from '../pages/PageWebProject';
import ScrollToTop from '../components/ScrollToTop';

function AppRouter() {
  const [projects, setProjects] = useState(null);
  const defaultDark = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  useEffect(() => {
    wordPressFetch('austyn-web-dev?filter[orderby]=date&order=asc&_embed')
      .then(data => {
        setProjects(data)
      })
  }, [])

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // console.log(theme)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className='site-wrapper' data-theme={theme}>
        <Routes>
          <Route path="/" element={<SplashPage projects={projects} theme={theme} switchTheme={switchTheme} />} />
          <Route path="/web-dev" element={<PageWebDev projects={projects} theme={theme} switchTheme={switchTheme} />} />
          <Route path="/web-dev/:slug" element={<PageWebProject projects={projects} theme={theme} switchTheme={switchTheme} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );

}

export default AppRouter;
