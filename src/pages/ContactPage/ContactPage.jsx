import Container from '../../components/common/Container/Container';
import './ContactPage.scss';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-page-banner">
        <h1 className="contact-page-banner-title">Liên hệ</h1>
      </div>
      <section className="section">
        <Container>
          <div className="contact-page-content">
            <p>Form liên hệ sẽ được cập nhật.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default ContactPage;
