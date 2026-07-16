import Container from '../../components/common/Container/Container';
import './NewsPage.scss';

function NewsPage() {
  return (
    <section className="section text-center" style={{ marginTop: '100px', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <h2>Nội dung đang cập nhật</h2>
      </Container>
    </section>
  );
}

export default NewsPage;
