import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import './ContactPage.scss';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-page-banner">
        <h1 className="contact-page-banner-title">Liên hệ</h1>
      </div>
      <section className="section">
        <Container>
          <SectionTitle
            subtitle="Liên hệ"
            title="Liên hệ với chúng tôi"
            description="Hãy để lại thông tin, chúng tôi sẽ liên hệ lại sớm nhất."
          />
          <div className="contact-page-content">
            <p>Form liên hệ sẽ được cập nhật.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default ContactPage;
