import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Reg from './pages/Reg';
import KNN from './pages/KNN';
import DTrees from './pages/DTrees';
import KMeans from './pages/KMeans';
import PCA from './pages/PCA';
import SVM from './pages/SVM';
import ANN from './pages/ANN';
import DBScan from './pages/DBScan';
import Docs from './pages/Docs';

function App() {
  useEffect(() => {
    // Set the page title
    document.title = "Gherbaz";

    // Set the favicon
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = '/favicon.svg';
      document.head.appendChild(newLink);
    } else {
      link.href = '/favicon.svg';
    }

    // Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.content = "Interactive machine learning visualizations for education and experimentation.";
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = "Interactive machine learning visualizations for education and experimentation.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/knn" element={<KNN />} />
          <Route path="/d-trees" element={<DTrees />} />
          <Route path="/kmeans" element={<KMeans />} />
          <Route path="/pca" element={<PCA />} />
          <Route path='/svm' element={<SVM />} />
          <Route path='/ann' element={<ANN />} />
          <Route path='/DBScan' element={<DBScan />} />
          <Route path='/docs' element={<Docs />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
