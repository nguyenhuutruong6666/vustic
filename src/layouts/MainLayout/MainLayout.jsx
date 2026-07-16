import { Outlet } from 'react-router';
import Header from '../../components/layouts/Header/Header';
import Footer from '../../components/layouts/Footer/Footer';
import './MainLayout.scss';

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
