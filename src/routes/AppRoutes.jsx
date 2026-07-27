import { BrowserRouter, Routes, Route } from 'react-router';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';
import MainLayout from '../layouts/MainLayout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import PartnersPage from '../pages/PartnersPage/PartnersPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage/ProjectDetailPage';
import NewsPage from '../pages/NewsPage/NewsPage';
import NewsDetailPage from '../pages/NewsDetailPage/NewsDetailPage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import MemberDetailPage from '../pages/MemberDetailPage/MemberDetailPage';
function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/doi-tac" element={<PartnersPage />} />
          <Route path="/du-an" element={<ProjectsPage />} />
          <Route path="/du-an/:id" element={<ProjectDetailPage />} />
          <Route path="/tin-tuc" element={<NewsPage />} />
          <Route path="/tin-tuc/:id" element={<NewsDetailPage />} />
          <Route path="/hinh-anh" element={<GalleryPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="/thanh-vien/:id" element={<MemberDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes; 
