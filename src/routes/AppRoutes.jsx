import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import PartnersPage from '../pages/PartnersPage/PartnersPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import NewsPage from '../pages/NewsPage/NewsPage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import ContactPage from '../pages/ContactPage/ContactPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/doi-tac" element={<PartnersPage />} />
          <Route path="/du-an" element={<ProjectsPage />} />
          <Route path="/tin-tuc" element={<NewsPage />} />
          <Route path="/hinh-anh" element={<GalleryPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
