import { Outlet } from 'react-router';
import Header from '../../components/layouts/Header/Header';
import Footer from '../../components/layouts/Footer/Footer';
import BackToTop from '../../components/common/BackToTop/BackToTop';
import './MainLayout.scss';

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default MainLayout;
